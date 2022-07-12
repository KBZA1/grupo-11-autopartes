module.exports = (sequelize, dataTypes) =>{
    let alias = "Categoria";
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria:{
            type: dataTypes.VARCHAR(25),
            allownull: false
        }
        }
        let config = {
            tableName: "Categoria",
            timestamps: false
        }
        const categoria = sequelize.define(alias, cols, config)

        categoria.associate = function (models){
            categoria.hasMany(models.Producto,{ //Usuario seria el valor a usar de alias en ese archivo
             as: "Producto",
             foreingKey: categoria_id 
            })

            return categoria;
        }
}
