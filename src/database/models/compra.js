module.exports = (sequelize, dataTypes) =>{
    let alias = "Compra";
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
            tableName: "Compra",
            timestamps: false
        }
        const compra = sequelize.define(alias, cols, config)

        compra.associate = function (models){
           compra.belongsTo(models.usuario,{ //Usuario seria el valor a usar de alias en ese archivo
             foreingKey: usuario_id 
            })
        }

        return usuario;
    };