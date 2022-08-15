const path = require ("path");
const db = require("../../database/models");
//const Usuario = db.Usuario
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

module.exports = {
    list: async (req, res) => {
        try {
          // USERS PAGINATION
          const pageAsNumber = parseInt(req.query.page);
          const limit = 15;
          //    localhost:/api/user/?page=1
          // definimos la paginación
          let page = 1;
          if (!Number.isNaN(pageAsNumber) && pageAsNumber > 1) {
            page = pageAsNumber;
          }
          const users = await db.usuario.findAll({
            attributes: ["id", "nombre", "email"],
            order: [["id", "ASC"]],
          });
          
          //console.log(users);
          
          
          const paginatedUsers = await db.usuario.findAll({
            limit: limit,
            offset: (page - 1) * limit,
            attributes: ["id", "nombre", "email"],
            order: [["id", "ASC"]],
          });
          paginatedUsers.forEach((user) => {
            return (user.dataValues.detail = `http://localhost:5001/api/users/${user.id}`)
          });
          const totalPages = Math.ceil(users.length / limit);
          
          res.status(200).json({
            meta: {
              count: users.length,
              totalPages,
              currentPage: page,
              next:
                page < totalPages && page > 0
                  ? `http://localhost:5001/api/users/?page=${page + 1}`
                  : undefined,
              previous:
                page > 1 && page <= totalPages
                  ? `http://localhost:5001/api/users/?page=${page - 1}`
                  : undefined,
              
            },
            users: paginatedUsers,
          })
        } catch (e) {
            res.status(500).json({
              meta: {
                status: "error",
              },
              error: "Usuario no correspondido",
            });
          }
        },
    detail: async (req, res) => {
        const id = req.params.id;
        try {
          const user = await db.usuario.findOne({
            attributes: { exclude: ["pass", "categoria_id"] },
            where: {
              id: id,
            },
          });
    
          // sobreescribimos el valor de image en la muestra al cliente
          user.dataValues.imagen = `/images/users/${user.imagen}`; ///raroooooo
          // user.setDataValue("image", `/images/users/${user.image.name}`);
    
          // le mandamos el user con la info
          res.status(200).json({
            user,
          });
        } catch (e) {
          res.status(500).json({
            meta: {
              status: "error",
            },
            error: "Usuario no correspondido",
          });
        }
      },
      
        
    }
