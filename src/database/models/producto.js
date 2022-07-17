module.exports = (sequelize, dataTypes) =>{
    let alias = "producto";
    let cols ={
        id:{
            type: dataTypes.TINYINT(15).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio:{
            type: dataTypes.TINYINT(15),
            allowNull: false
        },
        stock:{
            type: dataTypes.TINYINT(15),
            allowNull: false
        },
        descripcion:{
<<<<<<< HEAD
            type: dataTypes.STRING(150000),
=======
            type: dataTypes.STRING(500),
>>>>>>> f07868c9a2c2ba933876b4c3d40fb444be9c56c5
        },
        descuento:{
            type: dataTypes.TINYINT(15),
        },
        marca:{
            type: dataTypes.STRING(15),
        },
        categoria_id:{
            type: dataTypes.TINYINT(15).UNSIGNED
        }
        }
        let config = {
            tableName: "producto",
            timestamps: false
        }
        const producto = sequelize.define(alias, cols, config)

        producto.associate = function (models){
            producto.belongsTo(models.categoria,{ 
                foreingKey: "categoria_id"
               })
            producto.hasMany(models.imagen,{
                foreingKey: "producto_id"
            }) 
            producto.belongsTo(models.detalleDeVenta,{
                foreingKey: "producto_id"
            })
        }

        return producto;
    };