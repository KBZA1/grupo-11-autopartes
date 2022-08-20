const path = require ("path");
const fs = require ("fs");
const productsFilePath = path.join(__dirname, "../data/products.json")
const productsJson = fs.readFileSync(productsFilePath, "utf-8")
const products= JSON.parse(productsJson)
const db = require("../database/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = {
    index: (req,res)=>  { res.render(path.join(__dirname,"../views/users/index"), {products:products})},

    search:(req, res) => {
        const {term} = req.query;

        db.Product.findAll({
            where:{nombre:{[Op.like]:'%' + term + '%'}},
            include:["sections"]
          })
          .then(products=> res.render("./products", {products:products}))
    }
}


