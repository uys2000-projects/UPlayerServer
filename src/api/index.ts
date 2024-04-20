import { Router } from "express";

import sys from "./sys/get";
import auth from "./auth";
import data from "./data";

const router = Router();

router.get("/sys", sys);
router.use("/auth", auth);
router.use("/data", data);

export default router;
