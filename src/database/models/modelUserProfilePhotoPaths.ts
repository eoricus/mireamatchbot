import { DataTypes, Sequelize } from "sequelize";

const getModelUserProfilePhotoPaths = (sequelize: Sequelize) => {
  const model = sequelize.define("userProfilePhotoPaths", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userProfileId: {
      type:  DataTypes.INTEGER,
      references: {
        model: "userProfiles",
        key: "id",
      },
    },
    path: {
      type: DataTypes.STRING(128),
    },
    createdAt: DataTypes.DATE(),
    updatedAt: DataTypes.DATE(),
  });

  return model;
};

export default getModelUserProfilePhotoPaths;
