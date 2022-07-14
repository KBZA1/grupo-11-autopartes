module.exports = (sequelize, dataTypes) =>{
    let alias = "imagen";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombreImagen:{
            type: dataTypes.VARCHAR(10000),
            allownull: false
        },
        producto_id:{
            type: dataTypes.INTEGER.UNSIGNED,
        }
        }
        let config = {
            tableName: "imagen",
            timestamps: false
        }
        const imagen = sequelize.define(alias, cols, config)

        imagen.associate = function (models){
            imagen.hasMany(models.producto,{ //Usuario seria el valor a usar de alias en ese archivo
             as: "producto",
             foreingKey: producto_id 
            })
        }

        return imagen;
    };
