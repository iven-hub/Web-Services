const { Model, DataTypes } = require('sequelize')

class Dsd extends Model {
    static init(connection) {
        super.init({
            funcao: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Função deve conter no máximo 45 caractéres")                 
                    },
                }
            },
        }, {
            sequelize: connection,
            tableName: 'dsd',
        })
    }
    static associate(models){
        this.belongsTo(models.EdicaoDisciplina, { foreignKey: 'id_disciplina', as: 'edicao_disciplina' })
        this.belongsTo(models.Docente, { foreignKey: 'id_docente', as: 'docente' })
    }
}

module.exports = Dsd