const express = require ("express");
const path = require ("path")
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const apiProductsControllers = require("../../controllers/api/apiProductsControllers");

router.get("/", apiProductsControllers.list)
//router.get("/:id",apiProductosControllers)



module.exports = router;