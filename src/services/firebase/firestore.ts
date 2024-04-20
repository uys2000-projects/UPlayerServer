import { getFirestore } from "firebase-admin/firestore";

import app from "./app";

export const firestore = getFirestore(app);

export const getDocs = function (col: string) {
  return firestore.collection(col).get();
};

export const getDoc = function (col: string, doc: string) {
  return firestore.collection(col).doc(doc).get();
};

export const addDoc = function (col: string, data: object) {
  return firestore.collection(col).add(getData(data));
};

export const setDoc = function (col: string, doc: string, data: object) {
  return firestore.collection(col).doc(doc).set(getData(data));
};

export const updateDoc = function (col: string, doc: string, data: object) {
  return firestore.collection(col).doc(doc).update(getData(data));
};

export const deleteDoc = function (col: string, doc: string) {
  return firestore.collection(col).doc(doc).delete();
};

// Removes TypeScript Types from the object
const getData = function (data: object) {
  return JSON.parse(JSON.stringify(data));
};
