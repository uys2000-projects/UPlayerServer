import { Router } from "express";

import sys from "./sys/get";
import auth from "./auth";
import data from "./data";
import m3u from "./m3u";

const router = Router();

router.get("/sys", sys);
router.use("/auth", auth);
router.use("/data", data);
router.use("/m3u", m3u);

export default router;
