import { Router } from "express";
import auth from "../controllers/auth.js"
import passport from "passport";

const router = Router()


router.post("/auth/google", auth, passport.authenticate("google", {scope:["profile","email"]}))
router.get("/auth/google/callback",)

export default router