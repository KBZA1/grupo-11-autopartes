const path = require ("path");

const controller = {
    carrito:  (req, res) =>{res.render("../views/carritoCompra")},
    detalle: (req, res) =>{res.render("../views/productDetail")},
}

module.exports = controller; 