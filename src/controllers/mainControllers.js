const path = require ("path");
const controller = {
    index: (req,res)=> { res.render(path.join(__dirname,"../views/users/index"))},
    login: (req,res)=> { res.render(path.join(__dirname,"../views/users/login"))},
    registro: (req,res)=> { res.render(path.join(__dirname,"../views/users/register"))},
    /*create: ()=> {},*/
}
module.exports = controller;