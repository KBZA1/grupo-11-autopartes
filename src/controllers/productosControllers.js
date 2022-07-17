const { Console } = require("console");
const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
//const productsFilePath = path.join(__dirname, "../data/products.json")
//const productsJson = fs.readFileSync(productsFilePath, "utf-8")
//const products= JSON.parse(productsJson)
const db = require("../database/models");
//const producto = require("../database/models/producto");
//crear const categoria ?


const controller = {
    carrito:  (req, res) =>{res.render(path.join(__dirname,"../views/products/carritoCompra"), )},
  
    detalle: (req, res) =>{
        //const productos = products.find(element => element.id == req.params.id);
        //res.render(path.join(__dirname,"../views/products/productDetail"),{productos:productos})
        db.producto.findByPk(req.params.id, {
            include:[{association:"categoria"}, {association:"imagen"}]
        })
            .then(function(productos){
                return res.render("productDetail", {productos:productos})
            })
    },
    /*crear: (req, res) =>{res.render(path.join(__dirname,"../views/products/creacionProducto"))
    },
    crearProducto: (req, res)=>{
        let image;
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'image-default.jpg'
        }
        //let newProduct = {
        //    id: products[products.length - 1].id + 1,
        //    
        //        ...req.body
        //    ,
        //    imagen: image
        //};
        //products.push(newProduct)
        //fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        db.producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            descuento: req.body.descuento,
            marca: req.body.marca,
            categoria_id: req.body.categoria  
        })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error));
    },
    products: (req, res) => {
        db.producto.findAll()
        .then(function(producto){
            res.render(path.join(__dirname,"../views/products/products"),{products:producto})
        })
    //(req, res) =>{res.render(path.join(__dirname,"../views/products/products"),{products:products})
    
    },
    update: (req, res) => {
        db.producto.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            descuento: req.body.descuento,
            marca: req.body.marca, 
            categoria_id: req.body.categoria  
        },{
            where: {
                id: req.params.id
            }
        })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error));;        
    //(req, res) => {
    //    let id = Number(req.params.id);
    //    let productToEdit = products.find(product => product.id == id)
    //    let image;
    //    console.log(req.body)
    //   if (req.file != undefined ){
    //        image = req.file.filename
    //    } else {
    //        image = productToEdit.imagen
    //    }
    //    for (let i = 0; i < products.length; i ++) {
    //        if (id == products[i].id) {
    //         products[i] = {id:id, ...req.body, imagen: image}
    //        }
    //    }
    //    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    },
    edit: (req, res) => { //VER FORMULARIO DE EDICION. 
        let productosEdit = db.producto.findByPk(req.params.id);
        let productoCategoria = db.categoria.findAll();
        Promise.all([productoEdit, productoCategoria])
        .then(function([producto, categoria]){
                res.render(path.join(__dirname,"../views/products/form-edit-product"),{producto:producto, categoria:categoria})})
        //(req, res) =>{
        //let id = req.params.id
        //let productToEdit = products.find(product => product.id == id)
        //res.render(path.join(__dirname,"../views/products/form-edit-product"),{productToEdit})
        //}
    },
    destroy: (req, res) => { //BORRAR ASOCIACIONES PRIMERO?
        db.producto.destroy({
            where:{
                id:req.params.id,
                force: true
            }
        })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error));
        //let id = req.params.id;
        //let finalProducts = products.filter (product => product.id != id);
        //fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
        res.redirect ("/");
    },*/
}
module.exports = controller; 
