var express = require('express');
var router = express.Router();
const verify_user=require("../middlewares/admin")

var adminService = require('../controller/admin');

router.post("/signin",adminService.admin_Login);
router.post("/save_files",adminService.admin_Login);
router.get("/get_files",adminService.get_files);

module.exports = router;