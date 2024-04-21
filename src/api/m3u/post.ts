import { Request, Response } from "express";
import { readFile } from "../../utils/file";
import { NotSuccess } from "../../models/responses/success";

export default async function (req: Request, res: Response) {
  // GET Data and return Data
  try {
    const url = req.body.url;
    if (url) {
      const data = await readFile(url);
      return res.status(200).send({ data: data as string });
    }
  } catch (err) {
    console.log(err);
  }
  // If can not GET data, return 500 - NotSuccess
  return res.status(500).send(new NotSuccess());
}
