const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");
//const usersPath = path.join(__dirname, "../data/users.json");
//const usersR = fs.readFileSync(usersPath, "utf-8");
//const user = JSON.parse(usersR);
const {errors} = require ("express-validator");
const bcryptjs = require('bcryptjs');
const db = require("../database/models");
const usuario = require("../database/models/usuario");

module.exports = {
    login: (req,res)=> { res.render(path.join(__dirname,"../views/users/login"))},
    
    loginProcess: async (req, res) => {   //PROBLEMAS CON EL BCRYPTJS CON AWAIT(SIEMPRE FALSE) Y SIN AWAIT(SIEMPRE TRUE)
        let userToLogin = await db.usuario.findOne({
              where: {email: req.body.email},
        });
		//let userToLogin =  user.find(element => element.email == req.body.email); 
        if(userToLogin) {
		let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.pass); 
        console.log(userToLogin.pass)
        console.log(req.body.password)
        console.log(isOkThePassword)
        console.log(bcryptjs.hashSync("hola123", 10))
        console.log(bcryptjs.compareSync("hola123","$2a$10$bGS28UbvD.3gU4fl6cIYSeG0xqDEJ/LjC2dmzbEz2vDnyT1Hfxwym"))
		if (isOkThePassword) {
				delete userToLogin.pass;
				req.session.userLogged = userToLogin;
				//if(req.body.remember_user) {
				//	res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				//}
				return res.redirect('/');
			} 
			return res.render(path.join(__dirname,"../views/users/login"), {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render(path.join(__dirname,"../views/users/login"), {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
    register: (req,res)=> { res.render(path.join(__dirname,"../views/users/register"))},
    create: (req,res)=> { 
        let image;
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = 'image-default-user.png'
        }
        db.usuario.create({
            nombre: req.body.nombre,
            email: req.body.email,
            pass: bcryptjs.hashSync(req.body.password, 10),
            imagen: image,
            categoria_id: 2
        })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error));
        //let newUser = {
        //    id: Number(user[user.length - 1].id + 1),
        //    
        //       ...req.body,
        //        password : bcryptjs.hashSync(req.body.password, 10)
        //    ,
        //    imagen: image
        //};
        //user.push(newUser)
        //fs.writeFileSync(usersPath, JSON.stringify(user, null, ' '))
        //res.redirect('/');
    },/*
    users: (req,res)=> { res.render(path.join(__dirname,"../views/users/users"), { user : user})},

    //sesion: (req,res)=> {
    //    const userId = user.find(element => element.id == req.params.id);
    //    res.render(path.join(__dirname,"../views/users/user"), { userId : userId })
    //   },

    profile: (req,res)=> {
    res.render(path.join(__dirname,"../views/users/profile"), { userId : req.session.userLogged })
    },*/

    edit: (req,res)=> { 
        //const userf = user.find(element => element.id == req.params.id);
        //let pedidoUsuario = db.Usuarios.findByPk(req.params.id)
       res.render(path.join(__dirname,"../views/users/edit"), {userId : req.session.userLogged })
    },

    update: (req,res)=> { 
        let image;
        console.log(req.body);
        if (req.file != undefined ){
            image = req.file.filename
        } else {
            image = req.session.userLogged.imagen
        }
        db.usuario.update({
            nombre: req.body.nombre,
            email: req.body.email,
            pass: bcryptjs.hashSync(req.body.password, 10),
            imagen: image,
        },{
            where: {
                id: req.params.id
            }
        })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error));;
        //let id = Number(req.params.id);
        //let  userEdit = user.find(element => element.id == id)
        //let image;
        //console.log(req.body);
        //if (req.file != undefined ){
        //    image = req.file.filename
        //} else {
        //    image = userEdit.imagen
        //}
        //for (let i = 0; i < user.length; i ++) {
        //    if (id == user[i].id) {
        //    user[i] = {id:id,  ...req.body, password : bcryptjs.hashSync(req.body.password, 10) , imagen: image}
        //   }
        //}
        //fs.writeFileSync(usersPath, JSON.stringify(user, null, " "));
        //res.redirect("/");
    },
    logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/")
    },/*
    
    delete: (req, res) => {
        let id = req.params.id;
        let userD = user.filter (element => element.id != id);
        fs.writeFileSync(usersPath, JSON.stringify(userD, null, " "));
        res.redirect ("/");
    },*/
}

