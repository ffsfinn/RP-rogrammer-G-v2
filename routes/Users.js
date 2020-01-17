const express = require("express");
const router = express.Router();
const usersCtrl = require("../controller/Users");

router.get("/user", usersCtrl.index);
router.post("/user", usersCtrl.create);

module.exports = router;