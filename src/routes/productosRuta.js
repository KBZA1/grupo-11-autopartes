const express = require ("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

router.get("/carrito", productosControllers.carrito); 
router.get("/ficha", productosControllers.detalle);   
router.get("/abm", productosControllers.crear);   

module.exports = router;