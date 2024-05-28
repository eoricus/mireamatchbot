import { DataTypes, Sequelize } from "sequelize";

const getModelUserProfiles = (sequelize: Sequelize) => {
  const model = sequelize.define("userProfiles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING(16),
      references: {
        model: "users",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    sex: {
      type: DataTypes.ENUM("m", "w"),
      allowNull: true,
    },
    sexPreference: {
      type: DataTypes.ENUM("m", "w", "*"),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT(),
    },
    createdAt: DataTypes.DATE(),
    updatedAt: DataTypes.DATE(),
  });

  return model;
};

export default getModelUserProfiles;