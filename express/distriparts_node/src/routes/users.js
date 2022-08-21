/*------APLICAR REQUIRE--------*/
const express = require("express");

const multer = require ("multer");

const path = require ("path");

const { check } = require ("express-validator")
/*-------CONTROLLERS-------*/

const userControllers = require("../controllers/userControllers");

/*-----CONFIGURACION MIDDLEWARE------*/
const adminMiddleware = require ("../middleware/adminMiddleware");
const guestMiddleware = require ("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const sessionMiddleware = require("../middleware/sessionMiddleware");
//const multerMiddleware = require("../middleware/multerMiddleware");  <---------------
/*-----VALIDACION------*/
const validationLogin = require ("../middleware/validationLogin");
const validationRegister = require ("../middleware/validationRegister");
         
//PREGUNTAR A NATALIA QUE HAY QUE LLEVARSE DEL MULTER PARA REQUERIRLO COMO ARCHIVO <--------------
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
router.post("/", upload.single("imagen"),validationRegister, userControllers.create);

router.get("/users",adminMiddleware, userControllers.users);
router.put("/user/edit/admin/:id", userControllers.updateCategories);

//router.get("/user/:id", userControllers.sesion);
router.get("/user/edit/:id", sessionMiddleware, userControllers.edit);
router.put("/user/edit/:id", upload.single("imagen"), userControllers.update);
router.delete("/user/delete/:id", userControllers.delete);

module.exports = router;