const express = require("express");
const { isAuthenticate } = require("../../middleware/auth");

const router = express.Router();

router.get("/auth/user", isAuthenticate, (req, res) => {
  res.header('Access-Control-Allow-Origin', ['*'])
  res.json(req.user);
});

router.delete("/auth/logout", isAuthenticate, (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.json({ message: err });
    }
  });
});

module.exports = router;
