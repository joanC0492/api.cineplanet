import "dotenv/config";
import express, { Application, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes";
import { dbConnectMysql } from "./config/mysql";
import path from "path";

class App {
  private readonly app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.connected();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || "3001");
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  public routes(): void {
    this.app.use(router);
  }

  public connected(): void {
    dbConnectMysql();
  }

  public init(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Escuchando el puerto ${this.app.get("port")}`);
    });
  }
}

const app: App = new App();
app.init();