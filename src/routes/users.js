/*------APLICAR REQUIRE--------*/
const express = require("express");

const multer = require ("multer");

const path = require ("path");

/*-------CONTROLLERS-------*/

const userControllers = require("../controllers/userControllers.js");

/*-----CONFIGURACION MULTER------*/

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null, path.join(__dirname,"../../public/images/user" ))},
    filename: (req,file,cb)=>{
        cb (null,"image-" + Date.now() + path.extname("image"))},
});

/*------APLICAR--------*/
const router = express.Router();

const upload = multer({storage});

/*----- ROUTES------*/;

router.get("/acceso", userControllers.login)


router.get("/registro", userControllers.register);
router.post("/", upload.single("imagen"), userControllers.create);

router.get("/users", userControllers.users);

router.get("/user/:id", userControllers.sesion);

router.get("/user/edit/:id", userControllers.edit);
//router.put("/user/:id/edit", upload.single("imagen"), userControllers.update);

module.exports = router;