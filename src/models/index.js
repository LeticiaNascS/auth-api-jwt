import { Sequelize, DataTypes } from "sequelize";
import process from "process";
import configData from "../config/config.json" with { type: "json" };
import userModel from "./user.js";

const env = process.env.NODE_ENV || "development";
const config = configData[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

const models = [userModel];

models.forEach((modelInit) => {
  const model = modelInit(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
