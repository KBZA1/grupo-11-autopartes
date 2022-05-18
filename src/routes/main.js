/*------REQUIRE------*/
const express = require("express");
const multer = require ("multer");
const path = require ("path");
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const mainControllers = require("../controllers/mainControllers");

/*-----CONFIGURACION MULTER------*/
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null,path.join(__dirname,"images" ))},
    filename: (req,file,cb)=>{
        cb (null,"image-" + Date.now() + path.extname("image"/*provisorio*/))},
});
/*-----APLICAR MULTER------*/
const upload = multer({storage});

/*-----APLICAR INDEX------*/
router.get("/", mainControllers.index)
/*-----APLICAR LOGIN------*/
router.get("/acceso", mainControllers.login)
/*-----APLICAR REGISTRO------*/
router.get("/registro", mainControllers.registro)
/*router.post("/registro", upload.single("image"), mainController.create) */

module.exports = router;