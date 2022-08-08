module.exports = (sequelize, dataTypes) =>{
    let alias = "imagen";
    let cols ={
        id:{
            type: dataTypes.TINYINT(15).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombreImagen:{
            type: dataTypes.STRING(10000),
            allownull: false
        },
        producto_id:{
            type: dataTypes.TINYINT(15).UNSIGNED,
        }
        }
        let config = {
            tableName: "imagen",
            timestamps: false
        }
        const imagen = sequelize.define(alias, cols, config)

        /*imagen.associate = function (models){
            imagen.hasMany(models.producto,{ 
             as: "producto",
             foreingKey: "producto_id"
            })
        }*/

        return imagen;
    };
