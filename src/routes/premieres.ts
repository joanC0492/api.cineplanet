import { Router } from "express";
import { premieresController } from "../controllers/premieres.controller";

class Premieres {
  private router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public getRouter(): Router {
    return this.router;
  }

  public routes(): void {
    this.router.get("/", premieresController.getItems);
    this.router.get("/:id", premieresController.getItem);
  }
}

const premieres: Premieres = new Premieres();
export const router: Router = premieres.getRouter();
