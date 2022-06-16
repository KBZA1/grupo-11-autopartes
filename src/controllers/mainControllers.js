const path = require ("path");
const fs = require ("fs");
const productsFilePath = path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)

module.exports = {
    index: (req,res)=> { res.render(path.join(__dirname,"../views/users/index"), {products:products})},
}

