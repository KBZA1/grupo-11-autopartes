module.exports = (sequelize, dataTypes) =>{
    let alias = "Marca";
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombreMarca:{
            type: dataTypes.VARCHAR(15),
            allownull: false
        }
        }
        let config = {
            tableName: "Marca",
            timestamps: false
        }
        const marca = sequelize.define(alias, cols, config)

        marca.associate = function (models){
            marca.hasMany(models.Producto,{ //Producto seria el valor a usar de alias en ese archivo
             as: "Producto",
             foreingKey: marca_id 
            })

            return usuario_categoria;
        }

        
    }
