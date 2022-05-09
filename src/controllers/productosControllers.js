const path = require ("path");

const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"))},
    detalle: (req, res) =>{res.render(path.join(__dirname,"../views/products/productDetail"))},
    crear: (req, res) =>{res.render(path.join(__dirname,"../views/products/creacionProducto"))},
}

module.exports = controller; 