var express = require("express")
var passport = require("passport")

const router = express.Router()

router.get("/auth/google", passport.authenticate('google', {scope: ['profile', 'email']}))

router.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:5173/login/success"
}))

module.exports = router;
