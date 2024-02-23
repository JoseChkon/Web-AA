var express = require("express")
var passport = require("passport")

const router = express.Router()

router.get("/auth/google", passport.authenticate('google', {scope: ['profile', 'email']}))

router.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: process.env.LOGIN_SUCCESS,
  failureRedirect: "http://localhost:5173/login"
}))

router.get("/auth/logout", (req, res)=>{
  req.logout()
})

module.exports = router;
