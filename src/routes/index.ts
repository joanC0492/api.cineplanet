import { Router } from "express";
import { readdirSync } from "fs";

class Routes {
  private router: Router;
  private PATH_ROUTES: string = `${__dirname}`;

  constructor() {
    this.router = Router();
  }

  getRouter(): Router {
    return this.router;
  }

  init(): void {
    readdirSync(this.PATH_ROUTES).filter((fileName: string) => {
      const cleanName = fileName.replace(".ts", "");
      if (cleanName !== "index") {
        import(`./${cleanName}`).then((item) =>
          this.router.use(`/${cleanName}`, item.router)
        );
      }
    });
  }
}

const routes: Routes = new Routes();
routes.init();
export const router: Router = routes.getRouter();
