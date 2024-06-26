import { ServiceAccount } from "firebase-admin";

export default {
  type: process.env.UPLAYER_FIREBASE_TYPE ?? "",
  project_id: process.env.UPLAYER_FIREBASE_PROJECT_ID ?? "",
  private_key_id: process.env.UPLAYER_FIREBASE_PRIVATE_KEY_ID ?? "",
  private_key: process.env.UPLAYER_FIREBASE_PRIVATE_KEY ?? "",
  client_email: process.env.UPLAYER_FIREBASE_CLIENT_EMAIL ?? "",
  client_id: process.env.UPLAYER_FIREBASE_CLIENT_ID ?? "",
  auth_uri: process.env.UPLAYER_FIREBASE_AUTH_URI ?? "",
  token_uri: process.env.UPLAYER_FIREBASE_TOKEN_URI ?? "",
  auth_provider_x509_cert_url:
    process.env.UPLAYER_FIREBASE_AUTH_PROVIDER_X509_CERT_URL ?? "",
  client_x509_cert_url: process.env.UPLAYER_FIREBASE_CLIENT_X509_CERT_URL ?? "",
  universe_domain: process.env.UPLAYER_FIREBASE_UNIVERSE_DOMAIN ?? "",
} as ServiceAccount;
