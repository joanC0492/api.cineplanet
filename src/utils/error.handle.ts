import { Request, Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw: unknown): void => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
