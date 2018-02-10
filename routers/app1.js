const express = require("express");

let router = express.Router();


router.get("/", (req, res) => {
  res.render("app1/index");
});


router.get("/bla", (req, res) => {
  res.send("app 1 bla page");
});


module.exports = router;