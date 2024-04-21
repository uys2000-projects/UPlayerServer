import { Request, Response } from "express";
import { getFile } from "../../utils/file";
import { NotSuccess } from "../../models/responses/success";

export default async function (req: Request, res: Response) {
  // GET Data and return Data
  try {
    const url = req.body.url;
    if (url) {
      console.log(`Request URL: ${url}`);
      const data = await getFile.pLogger(url);
      return res.status(200).send({ data: data as string });
    }
  } catch (err) {
    console.log(err);
  }
  // If can not GET data, return 500 - NotSuccess
  return res.status(500).send(new NotSuccess());
}
