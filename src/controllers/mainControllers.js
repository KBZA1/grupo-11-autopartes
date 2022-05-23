const path = require ("path");
const fs = require ("fs")
const productsFilePath =  path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)
const controller = {
    index: (req,res)=> { res.render(path.join(__dirname,"../views/users/index"),{ products : products })},
    login: (req,res)=> { res.render(path.join(__dirname,"../views/users/login"))},
    registro: (req,res)=> { res.render(path.join(__dirname,"../views/users/register"))},
    /*create: ()=> {},*/
}
module.exports = controller;