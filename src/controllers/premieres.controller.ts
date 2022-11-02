import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllPremieres, getPremieres } from "../services/premieres.services";

class PremieresController {
  public async getItems(req: Request, res: Response) {
    try {
      const response = await getAllPremieres();
      res.send(response);
    } catch (error) {
      handleHttp(res, "ERROR_GET_ITEMS", error);
    }
  }

  public async getItem(req: Request, res: Response) {
    try {
      const response = await getPremieres(parseInt(req.params.id));
      res.send(response);
    } catch (error) {
      handleHttp(res, "ERROR_GET_ITEM", error);
    }
  }
}

const premieresController: PremieresController = new PremieresController();
export { premieresController };
