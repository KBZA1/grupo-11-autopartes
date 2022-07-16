module.exports = (sequelize, dataTypes) =>{
    let alias = "detalleDeVenta";
    let cols ={
        id:{
            type: dataTypes.TINYINT(15).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad:{
            type: dataTypes.TINYINT(15),
            allowNull: false
        },
        compra_id:{
            type: dataTypes.TINYINT(15),
            allowNull: false
        },
        producto_id:{
            type: dataTypes.TINYINT(15),
            allowNull: false
        },
        precio:{  //PREGUNTAR A NATALIA.
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        }
        }
        let config = {
            tableName: "detalledeventa",
            timestamps: false
        }
        const detalleDeVenta = sequelize.define(alias, cols, config)

        detalleDeVenta.associate = function (models){
            detalleDeVenta.hasMany(models.producto,{ 
                as: "productoDetalleVenta",
                foreignKey: "producto_id"
            })
        detalleDeVenta.belongsTo(models.compra,{
            as: "compra",
            foreignKey: "compra_id"
            })
        }

        return detalleDeVenta;
    };