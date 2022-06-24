/*------REQUIRE------*/
const express = require("express");
const multer = require ("multer");
const path = require ("path");
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const mainControllers = require("../controllers/mainControllers");

/*-----APLICAR INDEX------*/
router.get("/", mainControllers.index)

//router.get("/acceso", mainControllers.login)

module.exports = router;