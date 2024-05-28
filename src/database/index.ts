import env from "../env";

import { Sequelize } from "sequelize";

import {
  getModelUser,
  getModelUserProfiles,
  getModelUserProfilePhotoPaths,
} from "./models";

namespace db {
  const sequelize: Sequelize = new Sequelize({
    dialect: "postgres",
    username: "admin",
    password: "admin12345",
    database: "mireamatchbot",
    // host: env.databaseURL,
    host: "172.18.0.2",
    port: 5432,
    define: {
      timestamps: false,
    },
  });

  /**
   *
   */
  export const user = getModelUser(sequelize);
  /**
   *
   */
  export const userProfiles = getModelUserProfiles(sequelize);
  /**
   *
   */
  export const userProfilePhotoPaths = getModelUserProfilePhotoPaths(sequelize);

  sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

export default db;
