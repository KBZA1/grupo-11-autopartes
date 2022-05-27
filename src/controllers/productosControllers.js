const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
const productsFilePath =  path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)

const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"), console.log(category))},
  
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
        let productToEdit = products.find(product => product.id == id)
        console.log(productToEdit);
        let image;
        if (req.file != undefined ){
            image = req.file.filename
        } else {
            image = productToEdit.imagen
        }
        /*productToEdit = {
            id: productToEdit.id,
            ...req.body,
            imagen : image,
        }*/
        for (let i = 0; i < products.length; i ++) {
            if (id == products[i].id) {
             products[i] = {id:id, ...req.body, imagen: image}
            }
        }

        /*et editProducts = products.map(product => { 
            if (product.id == productToEdit.id) {
                product = productToEdit
            }
            return product;
        })*/
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/");
    },
    edit: (req, res) =>{
        let id = req.params.id
        let productToEdit = products.find(product => product.id == id)
        res.render(path.join(__dirname,"../views/products/form-edit-product"),{productToEdit})
    },
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter (product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, "\n"));
        res.redirect ("/");
    },
}
module.exports = controller; 
