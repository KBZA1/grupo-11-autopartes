module.exports = (sequelize, dataTypes) =>{
    let alias = "compra";
    let cols ={
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id:{
            type: dataTypes.INTEGER.UNSIGNED,
        },
        fecha:{
            type: dataTypes.DATE,
            allowNull: false
        },
        medioDePago:{
            type: dataTypes.DECIMAL(6,2),
            allowNull: false
        },
        }
        let config = {
            tableName: "compra",
            timestamps: false
        }
        const compra = sequelize.define(alias, cols, config)

        compra.associate = function (models){
           compra.belongsTo(models.usuario,{ 
             foreingKey: usuario_id 
            })
        }

        return usuario;
    };