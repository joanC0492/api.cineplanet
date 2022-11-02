import { Router } from "express";
import { candystoreController } from "../controllers/candystore.controller";

class Candystore {
  private router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getRouter(): Router {
    return this.router;
  }

  public routes(): void {
    this.router.get("/", candystoreController.getItems);
    this.router.get("/:id", candystoreController.getItem);
  }
}

const candystore: Candystore = new Candystore();
export const router = candystore.getRouter();