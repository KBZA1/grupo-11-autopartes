const express = require("express");
const router = express.Router();
const multer = require ("multer");
const mainControllers = require("../controllers/mainControllers");

router.get("/",mainControllers.index)
router.get("/acceso",mainControllers.login)
router.get("/registro",mainControllers.registro)

module.exports = router;