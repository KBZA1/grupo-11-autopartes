module.exports = (sequelize, dataTypes) =>{
    let alias = "marca";
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
            marca.hasMany(models.producto,{ 
             as: "Producto",
             foreingKey: marca_id 
            })

            return usuario_categoria;
        }

        
    }
