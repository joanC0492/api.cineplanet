import "dotenv/config";
import { Sequelize } from "sequelize";

const database = <string>process.env.MYSQL_DATABASE,
  username = <string>process.env.MYSQL_USER,
  password = <string>process.env.MYSQL_PASSWORD,
  host = <string>process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log("MYSQL Conexion Correcta");
  } catch (error) {
    console.log("MYSQL Error de conexion");
  }
};

export { sequelize, dbConnectMysql };
