module.exports = (sequelize, dataTypes) =>{
    let alias = "producto";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.VARCHAR(500),
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
            type: dataTypes.LONGTEXT,
        },
        descuento:{
            type: dataTypes.INTEGER,
        },
        marca:{
            type: dataTypes.VARCHAR(15),
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
                foreingKey: categoria_id 
               })
            producto.hasMany(models.imagen,{
                foreingKey: producto_id
            }) 
            producto.belongsTo(models.detalleDeVenta,{
                foreingKey: producto_id
            })
        }

        return producto;
    };