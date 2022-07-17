module.exports = (sequelize, dataTypes) =>{
    let alias = "usuario";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(200),
            allowNull: false
        },
        pass:{
            type: dataTypes.STRING(15),
            allowNull: false
        },
        imagen:{
            type: dataTypes.STRING(10000),
            allowNull: false
        },
        categoria_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
        }
        let config = {
            tableName: "usuario",
            timestamps: false
        }
        const usuario = sequelize.define(alias, cols, config)

        usuario.associate = function (models){
            usuario.belongsTo(models.usuario_categoria,{ 
             foreingKey: "categoria_id"
            })

            usuario.hasMany(models.compra,{
             foreingKey: "usuario_id"
            })
        }

    return usuario;
    };
