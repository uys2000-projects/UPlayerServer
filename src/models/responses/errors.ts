export class FirestoreNotActiveError {
  message!: string;

  constructor(message = "Firestore is not active") {
    this.message = message;
  }
}
