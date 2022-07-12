module.exports = (sequelize, dataTypes) =>{
    let alias = "Producto";
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
        marca_id:{
            type: dataTypes.INTEGER.UNSIGNED,
        },
        categoria_id:{
            type: dataTypes.INTEGER.UNSIGNED
        }
        }
        let config = {
            tableName: "Producto",
            timestamps: false
        }
        const producto = sequelize.define(alias, cols, config)

        producto.associate = function (models){
            producto.belongsTo(models.marca,{ //Usuario seria el valor a usar de alias en ese archivo
             foreingKey: marca_id 
            })
            producto.belongsTo(models.categoria,{ //Usuario seria el valor a usar de alias en ese archivo
                foreingKey: categoria_id 
               })
            producto.belongsToMany(models.imagen,{
                foreingKey: producto_id
            })   
        }

        return producto;
    };