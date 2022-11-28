const { Model, DataTypes } = require('sequelize')

class Aula extends Model {
    static init(connection) {
        super.init({
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            
            data: {
                type: DataTypes.DATE,
            },
            tipo: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Local deve conter no máximo 45 caractéres")
                    },
                }
            },            
        }, {
            sequelize: connection,
            tableName: 'aula',
        })
    }

    static associate(models){
        
        this.belongsTo(models.Horario, { foreignKey: 'id_horario', as: 'horario' })
    }
}

module.exports = Aula