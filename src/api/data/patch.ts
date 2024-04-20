import { Request, Response } from "express";
import { isFirestoreActive } from "../../utils/firestore";

import { FirestoreNotActiveError } from "../../models/responses/errors";
import { updateDoc } from "../../services/firebase/firestore";

import { NotSuccess, Success } from "../../models/responses/success";
import { Data } from "../../models/firestore/data";
import { UpdateData } from "../../models/firestore/update";

export default async function (req: Request, res: Response) {
  // Check firestore service is active
  if (!(await isFirestoreActive()))
    return res.status(503).send(new FirestoreNotActiveError());

  // UPDATE Data and return Success
  try {
    // CREATE Data to prevent to save unrelated DATA
    let data: UpdateData = {};

    // Add only existing paramaters to data to prevent changing unrelated data
    if (req.body.src) data.src = req.body.src;
    if (req.body.theme) data.theme = req.body.theme;

    await updateDoc("data", req.params.id, data);
    return res.status(200).send(new Success());
  } catch {}

  // If can not UPDATE doc, return 204 - NotSuccess
  return res.status(204).send(new NotSuccess());
}
