module.exports = (sequelize, dataTypes) =>{
    let alias = "producto";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descripcion:{
            type: dataTypes.STRING(150000),
        },
        descuento:{
            type: dataTypes.INTEGER,
        },
        marca:{
            type: dataTypes.STRING(15),
        },
        categoria_id:{
            type: dataTypes.INTEGER.UNSIGNED
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