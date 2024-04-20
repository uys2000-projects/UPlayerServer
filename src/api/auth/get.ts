import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { addDoc, setDoc } from "../../services/firebase/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { Auth, GetAuth } from "../../models/firestore/auth";
import { NotSuccess } from "../../models/responses/success";
import { Data } from "../../models/firestore/data";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // CREATE Auth and Data and return Success
  try {
    const snapshot = await addDoc("auth", new Auth());
    await setDoc("data", snapshot.id, new Data(snapshot.id));

    return res.status(201).send(new GetAuth(snapshot.id));
  } catch {}

  // If can not CREATE doc, return 500 - NotSuccess
  return res.status(500).send(new NotSuccess());
}
