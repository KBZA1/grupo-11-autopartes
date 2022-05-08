const express = require ("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

router.get("/carrito", productosControllers.carrito); 
router.get("/ficha", productosControllers.detalle);   

module.exports = router;