const fs = require ("fs");
const path = require ("path");
const products= JSON.stringify("../data/products.json")
const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"))},
    detalle: (req, res) =>{res.render(path.join(__dirname,"../views/products/productDetail"))},
    crear: (req, res) =>{res.render(path.join(__dirname,"../views/products/creacionProducto"))},
    crearProducto: (req, res)=>{
        req.body.push(products)
        fs.writeFileSync(products)
    },
}

module.exports = controller; 