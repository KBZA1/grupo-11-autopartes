module.exports = (sequelize, dataTypes) =>{
    let alias = "usuario_categoria";
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreDeCategoria:{
            type: dataTypes.STRING
        }
        }
        let config = {
            tableName: "usuarioCategoria",
            timestamps: false
        }
        const usuario_categoria = sequelize.define(alias, cols, config)

        usuario_categoria.associate = function (models){
            usuario_categoria.hasMany(models.Usuario,{ //Usuario seria el valor a usar de alias en ese archivo
             as: "usuario",
             foreingKey: categoria_id 
            })
        }

        return usuario_categoria;
    };

