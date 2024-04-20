import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { setDoc } from "../../services/firebase/firestore";

import { NotSuccess, Success } from "../../models/responses/success";
import { Data } from "../../models/firestore/data";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // set Data and return Success
  try {
    // CREATE Data to prevent to save unrelated DATA
    const data = new Data(req.params.id, req.body.src, req.body.theme);

    await setDoc("data", req.params.id, data);
    return res.status(200).send(new Success());
  } catch {}

  // If can not SET doc, return 204 - NotSuccess
  return res.status(204).send(new NotSuccess());
}
