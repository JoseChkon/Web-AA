import { Router } from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async function (req, accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({googleId:profile.id});

        if(!user){
            user = new User({
                googleId:profile.id,
                displayName:profile.displayName,
                email:profile.emails[0].value,
                image:profile.photos[0].value
            });

            await user.save();
        }

        return done(null,user)
    } catch (error) {
        return done(error,null)
    }
    }))

router.get(
  "/login/access",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.status(200);
  }
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(async function (user, cb) {
  cb(null, user);
});

export default router;
