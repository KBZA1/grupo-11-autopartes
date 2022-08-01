/*------APLICAR REQUIRE--------*/
const express = require("express");
//const path = require ("path");

/*-------CONTROLLERS-------*/

const apiUserControllers = require("../controllers/api/apiUserControllers");

/*------APLICAR--------*/
const router = express.Router();

/*----- ROUTES------*/;

router.get("/users",apiUserControllers.login)

router.post("/acceso", userControllers.loginProcess)

router.get("/user/profile", userControllers.profile);

router.get("/logout/", userControllers.logout)

router.get("/registro", userControllers.register);
router.post("/", userControllers.create);

router.get("/users", userControllers.users);

module.exports = router;