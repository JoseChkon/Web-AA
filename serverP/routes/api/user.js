const express = require('express')

const router = express.Router()

router.get("/auth/user", (req, res)=>{
    res.json(req.user)
})

module.exports = router
