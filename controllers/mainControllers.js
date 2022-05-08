const path = require ("path");
const controller = {
    index: (req,res)=> { res.render(( "../views/index"))},
    login: (req,res)=> { res.render(( "../views/login"))},
    registro: (req,res)=> { res.render(( "../views/register"))},
}
module.exports = controller;