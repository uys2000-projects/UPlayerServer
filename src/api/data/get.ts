import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { getDoc } from "../../services/firebase/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { NotSuccess } from "../../models/responses/success";
import { Data } from "../../models/firestore/data";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // GET Data and return Data
  const snapshot = await getDoc("data", req.params.id);
  if (snapshot.exists) {
    const data = snapshot.data();

    // Create Data to prevent to send unrelated DATA
    const result = new Data(data?.id as string, data?.src, data?.theme);
    return res.status(200).send(result);
  }

  // If can not GET doc, return 204 - NotSuccess
  return res.status(204).send(new NotSuccess());
}
