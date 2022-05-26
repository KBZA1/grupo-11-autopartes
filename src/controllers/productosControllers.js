const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
const productsFilePath =  path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)

const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"), console.log(category))},
<<<<<<< HEAD
    detalle: (req, res) =>{
        const productos = products.find(element => element.id == req.params.id);
        res.render(path.join(__dirname,"../views/products/productDetail"),{productos:productos})
=======
    /*Detalle anterior*/
    //detalle: (req, res) =>{
    //    const productos = products.find(element => element.id == req.params.id);
    //    res.render(path.join(__dirname,"../views/products/productDetail"),{productos:productos})
    //},
    /*Nuevo detalle by Cris(a eliminar despues)*/
    detalle: (req, res) =>{
        const productos = products.find(element => element.id == req.params.id);
        res.render(path.join(__dirname,"../views/products/BRUNO"),{productos:productos})
>>>>>>> a858a009e090d26bd0da61d09a5226478cdb0940
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
<<<<<<< HEAD
    
    products: (req, res) =>{res.render(path.join(__dirname,"../views/products/BRUNO"),{products:products})
    },

    edit: (req, res) =>{
        let id = req.params.id
        let productToEdit = products.find(product => product.id == id)
        res.render(path.join(__dirname,"../views/products/form-edit-product"),{productToEdit})
=======
    products: (req, res) =>{res.render(path.join(__dirname,"../views/products/products"),{products:products})
>>>>>>> a858a009e090d26bd0da61d09a5226478cdb0940
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
        //console.log(productToEdit);
        let editProducts = products.map(product => { 
            if (product.id == productToEdit.id) {
                product = productToEdit
            }
            return product;
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(editProducts, null, " "));
        res.redirect("/");
    },
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter (product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ""));
        res.redirect ("/");
    },
<<<<<<< HEAD
       
=======

>>>>>>> a858a009e090d26bd0da61d09a5226478cdb0940
}
module.exports = controller; 
