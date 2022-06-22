/*------APLICAR REQUIRE--------*/
const express = require("express");

const multer = require ("multer");

const path = require ("path");

const { check } = require ("express-validator")
/*-------CONTROLLERS-------*/

const userControllers = require("../controllers/userControllers");

/*-----CONFIGURACION MIDDLEWARE------*/
const guestMiddleware = require ("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

/*-----VALIDACION------*/
const validationLogin = [
    check("password").notEmpty().withMessage("El campo de contraseña no puede estar vacio"),
    check("email").notEmpty().withMessage("El campo de Nombre y Apellido no puede estar vacio").bail()
         .isEmail().withMessage("Tiene que tener un email valido"),];
const validationRegister = [
    check("nombre").notEmpty().withMessage("El campo de Nombre y Apellido no puede estar vacio").bail()
         .isLength({min: 3, }).withMessage("El campo tienen que tener al menos 3 caracteres"),
    check("email").notEmpty().withMessage("El campo de Nombre y Apellido no puede estar vacio").bail()
         .isEmail().withMessage("Tiene que tener un email valido"),
    check("password").isLength({min : 5, max: 12 }).withMessage("El campo de contraseña tiene que tener 5 a 12 caracteres").bail()
        .notEmpty().withMessage("El campo de contraseña no puede estar vacio"),
    /*check("imagen").custom((value, {req}){
         file = req.file;
         if (!file){
            throw new Error("Tienes que ingresar una Imagen")
         }
         return true
    })
*/];  
         

/*-----CONFIGURACION MULTER------*/
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null, path.join(__dirname,"../../public/images/user" ))},
    filename: (req,file,cb)=>{
        cb (null, "image-" + Date.now() + path.extname("imagen"))},
});

/*------APLICAR--------*/
const router = express.Router();

const upload = multer({storage});

/*----- ROUTES------*/;

router.get("/acceso",guestMiddleware, userControllers.login)
router.post("/acceso", validationLogin , userControllers.loginProcess)

router.get("/user/profile", authMiddleware, userControllers.profile);

router.get("/logout/", userControllers.logout)

router.get("/registro", guestMiddleware, userControllers.register);
router.post("/", upload.single("imagen"), userControllers.create);

router.get("/users", userControllers.users);

//router.get("/user/:id", userControllers.sesion);
router.get("/user/edit/:id", userControllers.edit);
router.put("/user/edit/:id", upload.single("imagen"), userControllers.update);
router.delete("/user/delete/:id", userControllers.delete);

module.exports = router;