const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");

     const usersPath = path.join(__dirname, "../data/users.json");
     const usersR = fs.readFileSync(usersPath, "utf-8");
     const user = JSON.parse(usersR);


const controller = {
    login: (req,res)=> { res.render(path.join(__dirname,"../views/users/login"))},
    register: (req,res)=> { res.render(path.join(__dirname,"../views/users/register"))},
    create: (req,res)=> { 
        let image;
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'image-default-user.png'
        }
        let newUser = {
            id: user[user.length - 1].id + 1,
            
                ...req.body
            ,
            imagen: image
        };
        user.push(newUser)
        fs.writeFileSync(usersPath, JSON.stringify(user, null, ' '))
        res.redirect('/');
    },
    users: (req,res)=> { res.render(path.join(__dirname,"../views/users/users"), { user : user})},

    sesion: (req,res)=> {
     const userId = user.find(element => element.id == req.params.id);
     res.render(path.join(__dirname,"../views/users/user"), { userId : userId })
    },

    edit: (req,res)=> { 
        const userf = user.find(element => element.id == req.params.id);
        res.render(path.join(__dirname,"../views/users/edit"), {userId : userf})
    },

    update: (req,res)=> { 
        let id = req.params.id;
        let  userEdit= user.find(product => product.id == id)
        let image;
        if (req.file != undefined ){
            image = req.file.filename
        } else {
            image = userEdit.imagen
        }
        for (let i = 0; i < user.length; i ++) {
            if (id == user[i].id) {
             user[i] = {id:id, ...userEdit, imagen: image}
            }
        }
        fs.writeFileSync(usersPath, JSON.stringify(user, null, " "));
        res.redirect("/");
    },
}
module.exports = controller; 
