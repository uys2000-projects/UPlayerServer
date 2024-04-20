import { Router } from "express";

import get from "./sys/get";

const router = Router();

router.get("/sys", get);

export default router;
