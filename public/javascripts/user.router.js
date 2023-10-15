var express = require('express');
var router = express.Router();
let controller = require("./user.controller")

router.get('/StartServer', controller.serverStart);
router.get('/FindUser', controller.findUser)

module.exports = router;