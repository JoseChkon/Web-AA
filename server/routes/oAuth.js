import { Router } from "express";
import request from "../controllers/request.js";
import auth from "../controllers/auth.js";

const router = Router()

router.post("/request", request)
router.get("/oauth", auth)

export default router