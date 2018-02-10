const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("app 2 main page");
});


router.get("/bla", (req, res) => {
  res.send("app 2 bla page");
});


module.exports = router;