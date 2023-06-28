var express = require('express');
var router = express.Router();
const verify_user=require("../middlewares/admin")

var adminService = require('../controller/admin');

router.post("/signin",adminService.admin_Login,verify_user);

module.exports = router;