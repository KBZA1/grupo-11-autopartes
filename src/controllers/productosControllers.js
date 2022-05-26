const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
const productsFilePath =  path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)

const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"), console.log(category))},
    /*Detalle anterior*/
    //detalle: (req, res) =>{
    //    const productos = products.find(element => element.id == req.params.id);
    //    res.render(path.join(__dirname,"../views/products/productDetail"),{productos:productos})
    //},
    /*Nuevo detalle by Cris(a eliminar despues)*/
    detalle: (req, res) =>{
        const productos = products.find(element => element.id == req.params.id);
        res.render(path.join(__dirname,"../views/products/BRUNO"),{productos:productos})
    },
    crear: (req, res) =>{res.render(path.join(__dirname,"../views/products/creacionProducto"))
    },
    crearProducto: (req, res)=>{
        let image;
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'image-default.jpg'
        }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            
                ...req.body
            ,
            imagen: image
        };
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
        res.redirect('/');
    },
    products: (req, res) =>{res.render(path.join(__dirname,"../views/products/products"),{products:products})
    },

    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id === id)
        let image;
        if (req.file != undefined ){
            image = req.file.filename
        } else {
            image = productToEdit.imagen
        }
        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            imagen : image,
        }
        let editProducts = products.map(product => { 
            if (product.id == productToEdit.id) {
                product = productToEdit
            }
            return product;
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(editProducts, null, " "));
        res.redirect("/");
    },
    edit: (req, res) =>{
        let id = req.params.id
        let productToEdit = products.find(product => product.id == id)
        res.render(path.join(__dirname,"../views/products/form-edit-product"),{productToEdit})
    },

}
module.exports = controller; 
