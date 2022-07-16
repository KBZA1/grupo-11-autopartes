module.exports = (sequelize, dataTypes) =>{
    let alias = "categoria";
    let cols ={
        id:{
            type: dataTypes.TINYINT(15),
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria:{
            type: dataTypes.STRING(25),
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
             foreignKey: "categoria_id" 
            })

            
        }
        return categoria;
}
