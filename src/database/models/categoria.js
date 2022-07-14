module.exports = (sequelize, dataTypes) =>{
    let alias = "categoria";
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
            tableName: "categoria",
            timestamps: false
        }
        const categoria = sequelize.define(alias, cols, config)

        categoria.associate = function (models){
            categoria.hasMany(models.producto,{ 
             as: "producto",
             foreingKey: categoria_id 
            })

            return categoria;
        }
}
