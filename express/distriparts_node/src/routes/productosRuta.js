/*------REQUIRE------*/
const express = require ("express");
const multer = require ("multer");
const path = require ("path")
/*------APLICAR ROUTER--------*/
const router = express.Router();
/*-------CONTROLLERS-------*/
const productosControllers = require("../controllers/productosControllers");
const validationProducts = require ("../middleware/validationProducts");

/*-----CONFIGURACION MULTER------*/
const storage =multer.diskStorage({
    destination:(req ,file ,cb)=>{
        cb (null, path.join(__dirname,"../../public/images" ))},
    filename: (req, file, cb)=>{
        cb (null, file.fieldname + "-" + Date.now() + path.extname("imagen"/*provisorio*/))},
});
/*-----APLICAR MULTER------*/
const upload = multer({storage});
/*-----APLICAR CARRITO------*/
router.get("/carrito", productosControllers.carrito); 
/*-----APLICAR CREATE------*/   
router.get("/create", productosControllers.crear);
router.post("/products", upload.single("imagen"),validationProducts,productosControllers.crearProducto); 

/*-----PRODUCT------*/
router.get("/products", productosControllers.products);
/*-----PRODUCT DETAILS------*/
router.get("/:id", productosControllers.detalle);
/*-----PRODUCTS BY CATEGORY------*/
router.get("/products/:categoria", productosControllers.productsByCategory);
/*-----APLICAR EDIT ONE PRODUCT------*/
router.get("/:id/edit", productosControllers.edit);
router.put("/:id/edit", validationProducts , upload.single("imagen") , productosControllers.update);

/* ---- APLICAR DELETE ONE PRODUCT ---- */
 router.delete("/delete/:id", productosControllers.destroy);


module.exports = router;