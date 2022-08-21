const { check } = require('express-validator');
const path = require ('path');

const checking = [
	check('nombre').notEmpty().withMessage('Tienes que escribir un nombre al nuevo producto'),
	check('marca').notEmpty().withMessage('Tienes que escribir una marca al producto').bail()
    .isLength({min: 1, }).withMessage("El campo tienen que tener al menos 2 caracteres"),
	check('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion al producto').bail()
    .isLength({min: 20, }).withMessage("El campo tienen que tener al menos 20 caracteres"),
    check('precio').notEmpty().withMessage('Tienes que escribir una precio').bail().isInt()
    .withMessage("Tiene que ingresar un precio valido"),
    check('descuento').isInt()
    .withMessage("Tiene que ingresar un descuento valido"),
    check('stock').notEmpty().withMessage('Tienes que escribir una marca').bail().isInt()
    .withMessage("Tiene que ingresar un stock valido en numero"),
	check('imagen').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg','.jpeg' , '.png', '.gif',".webp"];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]
module.exports = checking

