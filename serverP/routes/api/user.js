const express = require('express')
const { isAuthenticate } = require('../../middleware/auth')

const router = express.Router()

router.get("/auth/user", isAuthenticate, (req, res)=>{
    console.log(req)
    res.json(req.user)
})

module.exports = router
