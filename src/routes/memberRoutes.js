import express from "express";
import { MemberController } from "../controllers/memberController.js";

const router = express.Router();
router.get("/", MemberController.getAll);
router.post("/", MemberController.create);

export default router;