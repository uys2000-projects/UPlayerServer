import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

export default async function (req: Request, res: Response) {
  res.status(200).send({
    app: true,
    firestore: await isFirestoreActive(),
  });
  return;
}
