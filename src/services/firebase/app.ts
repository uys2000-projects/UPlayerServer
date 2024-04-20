import { initializeApp, cert } from "firebase-admin/app";
import firebaseAdminsdk from "../../keys/firebase-adminsdk";

export default initializeApp({
  credential: cert(firebaseAdminsdk),
});
