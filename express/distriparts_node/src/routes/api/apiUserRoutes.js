/*------APLICAR REQUIRE--------*/
const express = require("express");
//const path = require ("path");

/*-------CONTROLLERS-------*/

const apiUserControllers = require("../../controllers/api/apiUserControllers");

/*------APLICAR--------*/
const router = express.Router();

/*----- ROUTES------*/;

router.get("/",apiUserControllers.list)
router.get("/:id", apiUserControllers.detail);


module.exports = router;