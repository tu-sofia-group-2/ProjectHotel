import express from "express";
import { createCode, reissuePassword, validateCode } from "../controllers/reedition";
const router = express.Router();

router.post("/", createCode);
router.get("/verify", validateCode);
router.put("/", reissuePassword);

export default router;
