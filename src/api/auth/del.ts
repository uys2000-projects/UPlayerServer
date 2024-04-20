import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { deleteDoc } from "../../services/firebase/firestore";

import { Success, NotSuccess } from "../../models/responses/success";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // DELETE Auth and return Success
  try {
    await deleteDoc("auth", req.params.id);
    return res.status(200).send(new Success());
  } catch {}

  // If can not DELETE doc, return 204 - NotSuccess
  return res.status(204).send(new NotSuccess());
}
