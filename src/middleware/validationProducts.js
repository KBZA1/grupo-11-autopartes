const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre al nuevo producto'),
	body('marca').notEmpty().withMessage('Tienes que escribir una marca al producto').bail()
    .isLength({min: 1, }).withMessage("El campo tienen que tener al menos 2 caracteres"),
	body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion al producto').bail()
    .isLength({min: 15, }).withMessage("El campo tienen que tener al menos 15 caracteres"),
    body('precio').notEmpty().withMessage('Tienes que escribir una precio').bail().isInt()
    .withMessage("Tiene que ingresar un precio valido"),
    body('descuento').isInt()
    .withMessage("Tiene que ingresar un descuento valido"),
    body('codigo').notEmpty().withMessage('Tienes que escribir una codigo'), //Necesario ? por que esta el id
    body('stock').notEmpty().withMessage('Tienes que escribir una marca').bail().isInt()
    .withMessage("Tiene que ingresar un stock valido en numero"),
	body('imagen').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

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

