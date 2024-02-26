var express = require("express")
var passport = require("passport")
const { registerController, loginController } = require("../controllers/commonAuth")

const router = express.Router()

router.get("/auth/google", passport.authenticate('google', {scope: ['profile', 'email']}))

router.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: process.env.LOGIN_SUCCESS,
  failureRedirect: "http://localhost:5173/sigin"
}))

router.post('/auth/register', registerController)

router.post('/auth/login', loginController)

router.get('/auth/authenticate', passport.authenticate("jwt"), (req, res, next) => {
  res.json({
    message: 'You did it!',
    user: req.user,
    token: req.query.secret_token,
  })})

module.exports = router;
