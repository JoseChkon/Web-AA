const express = require("express")
const user = require("./api/user.js")
const auth = require("./oAuth.js")

const router = express.Router()

router.use(user)
router.use(auth)

module.exports = router