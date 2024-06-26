/**
 * TO-DO: get hints and some another params from db
 */

import _env from "../env.json";

/**
 * TO-DO: Remove to another
 */
const messages = {
  start: {
    before: `
🤠 Привет \\! Я — бот для поиска второй половинки из МИРЭА\\!

💯 Сотни парней и девушек ждут именно тебя\\! Регистрируйся, и найди свою половинку 💘\\!

||🔞 Помни, что интернет — это опасное место\\. Будь осторожен, и пользуйся ботом ответственно||

*Готов? ❤️*
`,
    after: `
🤠 Привет \\! Я — бот для поиска второй половинки из МИРЭА\\!

💯 Сотни парней и девушек ждут именно тебя\\! Регистрируйся, и найди свою половинку 💘\\!

||🔞 Помни, что интернет — это опасное место\\. Будь осторожен, и пользуйся ботом ответственно||
`,
  },

  ready: {
    step1: "🤩 Отлично! Как тебя зовут?",
    step2: "😳 Ты парень или девушка?",
    step3: "🧐 Кого ты ищешь?",
    step4: (name: string) =>
      `🤯 ${name}, расскажи немного о себе, что людям стоит знать`,
  },
};

const env = Object.assign({ databaseURL: process.env.DATABASE_URL }, _env, {
  messages: messages,
});

export default env;
