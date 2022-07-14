module.exports = (sequelize, dataTypes) =>{
    let alias = "detalleDeVenta";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        compra_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        producto_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        precio:{
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
             foreingKey: producto_id 
            })

                // Falta relaciones con detalleDeVenta en producto.js y compra.js
                // REVISAR ESTAS RELACIONES DIA JUEVEEEEEEEEEEEEEEEEEEEES


        detalleDeVenta.belongsTo(models.compra,{
             foreingKey: compra_id
            })
        }

        return detalleDeVenta;
    };