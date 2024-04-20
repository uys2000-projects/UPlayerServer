import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  res.status(200).send({
    code: 0,
    message: "Başarılı",
  });
  return;
}
