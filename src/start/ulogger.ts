import { setDebugMode } from "u-logger";
setDebugMode(
  process.env.DEBUG_MODE == "TRUE",
  process.env.DEBUG_STRING_MODE == "TRUE"
);
