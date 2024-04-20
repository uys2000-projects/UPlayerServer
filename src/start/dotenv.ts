import { config } from "dotenv";

config();

if (process.env.ENV) {
  const path = `.env.${process.env.ENV}`;
  config({ path });
}
