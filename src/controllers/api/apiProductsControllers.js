const db = require("../../database/models");
const path = require ("path");
const Op = db.Sequelize.Op;


module.exports = {
    list: async (req, res) => {
        try {
          // PAGINACION PRODUCTO
          const pageAsNumber = parseInt(req.query.page);
          const limit = 3;
          
          
          let page = 1;
          if (!Number.isNaN(pageAsNumber) && pageAsNumber > 1) {
            page = pageAsNumber;
          }
          const products = await db.producto.findAll({
            order: [["id", "ASC"]],
            attributes: ["id", "nombre", "descripcion"],
          })          
          
          const paginatedProducts = await db.producto.findAll({
            limit: limit,
            offset: (page - 1) * limit,
            include: [
              { association: "categoria", attributes: ["nombreCategoria"] },
            ],
            attributes: ["id", "nombre", "descripcion"],
            order: [["id", "ASC"]],
          });
          paginatedProducts.forEach((product) => {
            return (product.dataValues.detail = `http://localhost:5001/api/products/${product.id}`)
          });
          const totalPages = Math.ceil(products.length / limit);

          // COUNT POR CATEGORIAS.
          const categories = await db.categoria.findAll({
            include: ["producto"],
            attributes: ["nombreCategoria"],
            order: [["id", "ASC"]],
          });
          //   guardaremos todo en un obj.literal
          let categoryCount = {};
          for (let category of categories) {
            // meter key-value en un objeto literal
            categoryCount[category.nombreCategoria] = category.producto.length;      
          } 
          
          res.status(200).json({
            meta: {
              count: products.length,
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
            products: paginatedProducts,
          })
        } catch (e) {
            res.status(500).json({
              meta: {
                status: "error",
              },
              error: "Producto no encontrado",
            });
          }
        },  
        
    }
