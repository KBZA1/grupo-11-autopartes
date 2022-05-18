/*------REQUIRE------*/
const express = require ("express");
const multer = require ("multer");
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const productosControllers = require("../controllers/productosControllers");


/*-----CONFIGURACION MULTER------*/
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null,path.join(__dirname,"images" ))},
    filename: (req,file,cb)=>{
        cb (null, file.fieldname + "-" + Date.now() + path.extname("image"/*provisorio*/))},
});
/*-----APLICAR MULTER------*/
const upload = multer({storage});

/*-----APLICAR CARRITO------*/
router.get("/carrito", productosControllers.carrito); 
/*-----APLICAR FICHA------*/
router.get("/ficha", productosControllers.detalle);
/*-----APLICAR ABM------*/   
router.get("/abm", productosControllers.crear);
router.post("/", upload.single("imagen"),productosControllers.crearProducto);      


module.exports = router;