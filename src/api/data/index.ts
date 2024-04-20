import { Router } from "express";

import get from "./get";
import put from "./put";
import patch from "./patch";
import del from "./del";

const router = Router();

router.get("/:id", get);
router.put("/:id", put);
router.patch("/:id", patch);
router.delete("/:id", del);

export default router;
