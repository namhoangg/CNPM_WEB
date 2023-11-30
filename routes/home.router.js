const express = require("express");
const router = express.Router();
const controller = require("../controllers/home.controller");
function checkAuth(req, res, next) {
  if (!req.cookies.userToken) {
    res.locals.userToken = "";
  }
  next();
}
router.get("/", checkAuth, controller.index);
module.exports = router;
