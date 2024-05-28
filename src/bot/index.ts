import { setListeners } from "./listeners";
import { Telegram } from "puregram";
import env from "../env";
import LoggerManager from "@/logger";
import { setHints } from "@/utils/setHints";
import db from "@/database";

export default async () => {
  const telegram: Telegram = Telegram.fromToken(env.bot.token);
  const progress = LoggerManager.createProgressBar("launch", 4);

  try {
    /**
     * stop polling for previous versions
     */
    telegram.updates.stopPolling();

    /**
     *
     */
    const droppedUpdates = await telegram.updates.dropPendingUpdates();
    progress(`Total ${droppedUpdates} pending updates was dropped`);

    /**
     *
     */
    await telegram.updates.startPolling();
    progress(`Started`);

    /**
     * TO-DO: убрать в другое место
     */

    telegram.updates.use(async (context, next) => {
      if (context.is("message") || context.is("callback_query")) {
        // const user = await db.user.findByPk(String(context.from?.id));

        // await db.user.create({
          
        // })

        // console.log(user?.dataValues);

        next()
      }
    });

    /**
     * TO-DO: убрать в другое место
     */
    telegram.onBeforeRequest((context) => {
      if (context.path === "sendMessage") {
        context.params.parse_mode = "html";
      }

      return context;
    });

    /**
     *
     */
    (await setHints(telegram)) == true
      ? progress("Set hints")
      : progress.error("Hints are not set");

    await setListeners(telegram);
    progress(`Set listeners`);
  } catch (error) {
    progress.error(error);
  }
};
