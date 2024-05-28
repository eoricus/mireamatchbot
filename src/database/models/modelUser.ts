import { DataTypes, Sequelize } from "sequelize";

const getModelUser = (sequelize: Sequelize) => {
  const model = sequelize.define(
    "user",
    {
      id: { type: DataTypes.STRING(16), primaryKey: true },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "users",
    }
  );

  return model;
};

export default getModelUser;
