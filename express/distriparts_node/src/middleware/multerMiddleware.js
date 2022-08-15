// Require MULTER
const multer = require ("multer");
// Require PATH
const path = require ("path");



/*-----CONFIGURACION MULTER------*/
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null, path.join(__dirname,"../../public/images/user" ))},
    filename: (req,file,cb)=>{
        cb (null, "image-" + Date.now() + path.extname("imagen"))},
})


module.exports = storage
