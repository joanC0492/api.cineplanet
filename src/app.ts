import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes";
import { dbConnectMysql } from "./config/mysql";

class App {
  public readonly app: Application;
  public readonly engine_db: string = <string>process.env.ENGINE_DB;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.connected();
  }

  config(): void {
    this.app.set("port", process.env.PORT || "3001");
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use(router);
  }

  connected(): void {
    dbConnectMysql();
  }

  init(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Escuchando el puerto ${this.app.get("port")}`);
    });
  }
}

const app: App = new App();
app.init();
