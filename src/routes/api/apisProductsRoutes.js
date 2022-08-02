const express = require ("express");
const path = require ("path")
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const productosControllers = require("../controllers/api/apiProductsControllers");

router.get("/",productosControllers)
router.get("/:id",productosControllers)



module.exports = router;