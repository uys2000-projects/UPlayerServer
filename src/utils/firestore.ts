import { getDoc, setDoc } from "../services/firebase/firestore";

export const isFirestoreActive = async function () {
  let firestore = false;

  try {
    const firestoreStatus = await getDoc("sys", "status");
    if (!firestoreStatus.exists) setDoc("sys", "status", { isActive: false });
    else firestore = firestoreStatus.data()?.isActive as boolean;
  } catch {}

  return firestore;
};
