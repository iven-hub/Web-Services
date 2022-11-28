const { Model, DataTypes } = require('sequelize')

class Docente extends Model {
    static init(connection) {
        super.init({
            sigla: {
                type: DataTypes.STRING,
                allowNull: false,                
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,                
            },
            nome_completo: {
                type: DataTypes.STRING,                
            },            
            grau: {
                type: DataTypes.STRING,                
            },
            tipo_contrato: {
                type: DataTypes.STRING,
                validate: {
                    maxLength: val => {
                        if (val.length > 45) throw new Error("Tipo de Contrato deve conter no máximo 45 caractéres")                 
                    },
                }
            },            
        }, {
            sequelize: connection,
            tableName: 'docente',
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' })
        this.belongsTo(models.Departamento, { foreignKey: 'area', as: 'grupo_disciplinar' })
        this.belongsToMany(models.Disciplina, { foreignKey: 'id_docente', through: 'dsd', as: 'disciplina' })
    }
}

module.exports = Docente