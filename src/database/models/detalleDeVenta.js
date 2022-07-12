module.exports = (sequelize, dataTypes) =>{
    let alias = "Detalle de venta";
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
            tableName: "Detalle de venta",
            timestamps: false
        }
        const detalleDeVenta = sequelize.define(alias, cols, config)

        detalleDeVenta.associate = function (models){
            detalleDeVenta.hasMany(models.producto,{ //Usuario seria el valor a usar de alias en ese archivo
             foreingKey: producto_id 
            })


               // REVISAR ESTAS RELACIONES DIA JUEVEEEEEEEEEEEEEEEEEEEES


        detalleDeVenta.belongsTo(models.compra,{
             foreingKey: compra_id
            })
        }

        return detalleDeVenta;
    };