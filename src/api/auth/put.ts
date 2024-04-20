import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { setDoc } from "../../services/firebase/firestore";

import { Success, NotSuccess } from "../../models/responses/success";
import { Auth } from "../../models/firestore/auth";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // SET Auth and return Success
  try {
    // CREATE Auth to prevent to save unrelated DATA
    const auth = new Auth(req.body.isActive);

    await setDoc("auth", req.params.id, auth);
    return res.status(200).send(new Success());
  } catch {}

  // If can not SET doc, return 204 - NotSuccess
  return res.status(204).send(new NotSuccess());
}
