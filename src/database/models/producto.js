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
            type: dataTypes.STRING(150000),
        },
        descuento:{
            type: dataTypes.TINYINT(15),
        },
        marca:{
            type: dataTypes.STRING(15),
        },
        categoria_id:{
            type: dataTypes.TINYINT(15),
        },
        imagen: {
            type: dataTypes.STRING(100),
        }
        }
        let config = {
            tableName: "producto",
            timestamps: false
        }
        const producto = sequelize.define(alias, cols, config)

        producto.associate = function (models){
            producto.belongsTo(models.categoria,{ 
                as: "categoria",
                foreignKey: "categoria_id"
               })
            /*producto.hasMany(models.imagen,{
                as: "imagen",
                foreingKey: "producto_id"
            }) */
            /*producto.belongsTo(models.detalleDeVenta,{
                foreingKey: "producto_id"
            })*/
        }

        return producto;
    };