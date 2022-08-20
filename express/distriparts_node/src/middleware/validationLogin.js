const { body } = require ("express-validator");
const validationLogin =  [
    body("password").notEmpty().withMessage("El campo de contraseña no puede estar vacio").bail()
    .isLength({min: 8, }).withMessage("El campo tiene que tener al menos 8 caracteres"),
    body("email").notEmpty().withMessage("El campo de email no puede estar vacio").bail()
         .isEmail().withMessage("Tiene que tener un email valido"),]

module.exports = validationLogin;