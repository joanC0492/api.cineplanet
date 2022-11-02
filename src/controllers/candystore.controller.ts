import { Request, Response } from "express";
import { getAllCandyStore, getCandyStore } from "../services/candystore.model";
import { handleHttp } from "../utils/error.handle";

class CandystoreController {
  public async getItem(req: Request, res: Response) {
    try {
      const response = await getCandyStore(parseInt(req.params.id));
      res.send(response);
    } catch (error) {
      handleHttp(res, "ERROR_GET_ITEM", error);
    }
  }

  public async getItems(req: Request, res: Response) {
    try {
      const response = await getAllCandyStore();
      res.send(response);
    } catch (error) {
      handleHttp(res, "ERROR_GET_ITEMS", error);
    }
  }
}

const candystoreController: CandystoreController = new CandystoreController();
export { candystoreController };
