const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
const usersPath = path.join(__dirname, "../data/users.json");
const usersR = fs.readFileSync(usersPath, "utf-8");
const user = JSON.parse(usersR);


module.exports = {
    login: (req,res)=> { res.render(path.join(__dirname,"../views/users/login"))},
    
    loginProcess: (req, res) =>{
        let userMail = user.find(element => element.email == req.params.email);
        if (userMail){
        // let passwordBycr = bcryptjs.compareSync (req.body.password, userMail.password);
        if(userMail.contraseña != undefined){// cambiar if(userMail...) por if =(passwordBycr)
            delete userMail.contraseña; //borrar info de password.
            req.session.userLogged = userMail
            return res.redirect(path.join(__dirname,"../views/users/index"))
        }
            return res.render(path.join(__dirname,"../views/users/login"),{
            //validator
            errors: {
                email :{
                    msg: "No existe un usuario con ese email"
                }
            }
        })
    }},

    register: (req,res)=> { res.render(path.join(__dirname,"../views/users/register"))},
    create: (req,res)=> { 
        let image;
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'image-default-user.png'
        }
        let newUser = {
            id: Number(user[user.length - 1].id + 1),
            
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
        let id = Number(req.params.id);
        let  userEdit = user.find(element => element.id == id)
        let image;
        console.log(req.body);
        if (req.file != undefined ){
            image = req.file.filename
        } else {
            image = userEdit.imagen
        }
        for (let i = 0; i < user.length; i ++) {
            if (id == user[i].id) {
            user[i] = {id:id,  ...req.body , imagen: image}
            }
        }
        fs.writeFileSync(usersPath, JSON.stringify(user, null, " "));
        res.redirect("/");
    },
    //logout: (req, res) => {
    //    req.session.destroy();
    //    return res.redirect("/")
    //}
    
    delete: (req, res) => {
        let id = req.params.id;
        let userD = user.filter (element => element.id != id);
        fs.writeFileSync(usersPath, JSON.stringify(userD, null, " "));
        res.redirect ("/");
    },
}

