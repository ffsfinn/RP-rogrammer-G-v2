const express = require("express");
const router = express.Router();
const usersCtrl = require("../controller/users");

router.get("/user", usersCtrl.index);
router.post("/signup", usersCtrl.signup);

module.exports = router;