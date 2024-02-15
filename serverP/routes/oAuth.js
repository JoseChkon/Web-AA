import { Router } from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20"
import User from "../models/user.js"
import dotenv from 'dotenv'
dotenv.config()

const router = Router()

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async function (req, accessToken, refreshToken, profile, cb, done){
    let user = User.findOne({_id: profile.id})
    console.log(user)
  }
));

router.get("/login/access", passport.authenticate("google", {scope:["profile","email"]}))
router.get("/auth/google/callback")

export default router