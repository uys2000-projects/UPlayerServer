import { Router } from "express";

import get from "./get";
import put from "./put";
import del from "./del";

const router = Router();

router.get("/", get);
router.put("/:id", put);
router.delete("/:id", del);

export default router;
