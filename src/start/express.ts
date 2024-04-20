import express from "express";

import * as parser from "body-parser";
import cors from "cors";

import api from "../api";

const app = express();

const corsOptions = {
  origin: ["https://mehmetuysal.dev"],
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use("/", cors(corsOptions), api);

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
  console.clear();
  console.log(`App : http://localhost:${port}`);
});
