const path = require ("path");

const controller = {
    carrito:  (req, res) =>{res.sendFile(path.join(__dirname,"../views/carritoCompra.html"))},
    detalle: (req, res) =>{res.sendFile(path.join(__dirname,"../views/productDetail.html"))},
}

module.exports = controller; 