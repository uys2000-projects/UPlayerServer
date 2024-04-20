import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { addDoc } from "../../services/firebase/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { GetAuth } from "../../models/responses/auth";
import { NotSuccess } from "../../models/responses/success";
import Auth from "../../models/firestore/auth";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // CREATE Auth and return Success
  try {
    const snapshot = await addDoc("auth", new Auth());
    return res.status(201).send(new GetAuth(snapshot.id));
  } catch {}

  // If can not CREATE doc, return 500 - NotSuccess
  return res.status(500).send(new NotSuccess());
}
