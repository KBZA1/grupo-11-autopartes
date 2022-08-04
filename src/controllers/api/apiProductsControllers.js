 const { sequelize } = require("../../database/models");
const path = require ("path");
const db = require("../../database/models");
const productos = db.productos // ??
const categoria = db.categoria // ??

const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");



const apiProductsController = {
  // listar todos productos
  list: async (req, res) => {
    try {
      // PRODUCTS PAGINATION
      const pageAsNumber = parseInt(req.query.page);
      const limit = 10;

      // definimos la paginación
      let page = 1;
      // si es número lo que llega en el string
      if (!Number.isNaN(pageAsNumber) && pageAsNumber > 1) {
        page = pageAsNumber;
      }

      // MUESTRA DE PRODUCTOS CON OFFSET-LIMIT
      const products = await productos.findAll({
        limit: limit,
        offset: (page - 1) * limit,
        include: [
          { association: "categoria", attributes: ["nombreCategoria"] },
        ],
        attributes: ["id", "nombre", "descripcion", "precio", "descuento", "marca", "imagen"],
        order: [["id", "ASC"]],
      });

      // por cada producto
      products.forEach((product) => {
        let images_url = [];
        // por cada imagen pusheamos su url en la variable de arriba
        product.imagen.forEach((image) => {
          images_url.push(
            `http://localhost:5001/images/products/${image}`
          );
        });
        // creamos dataValue images_url
        product.dataValues.images_url = images_url;

        // creamos dataValue detail
        product.dataValues.detail = `http://localhost:5001/api/products/${product.id}`;
      });

      // MUESTRA COUNT POR CATEGORÍA
      //   llamamos a todas las categorías con sus productos
      const categories = await categoria.findAll({
        include: ["producto"],
        attributes: ["nombre"],  
        order: [["id", "ASC"]],  
      });
      //   guardaremos todo en un obj.literal
      let categoryCount = {};
      // y aquí la cuenta de todos los productos
      let count = 0;
      //   por cada categoría introduce key-value en categoryCount
      for (let category of categories) {
        // meter key-value en un objeto literal
        categoryCount[category.nombreCategoria] = category.producto.length;
        // contar los productos
        count += category.producto.length;
      }

      const totalPages = Math.ceil(count / limit);

      //   mostramos todo
      res.status(200).json({
        meta: {
          count: count,
          countByCategory: categoryCount,
          totalPages,
          currentPage: page,
          next:
            page < totalPages && page > 0
              ? `http://localhost:5001/api/products/?page=${page + 1}`
              : undefined,
          previous:
            page > 1 && page <= totalPages
              ? `http://localhost:5001/api/products/?page=${page - 1}`
              : undefined,
        },
        products,
      });
    } catch (e) {
      res.status(500).json({
        meta: {
          status: "error",
        },
        error: "Producto no encontrado en la base",
      });
    }
  },
};

module.exports = apiProductsController;
