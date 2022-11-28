const { Model, DataTypes } = require('sequelize')

class Curso extends Model {
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
            conferegrau: {
                type: DataTypes.STRING,
                allowNull: false,                
            },   
        }, {
            sequelize: connection,
            tableName: 'curso',
        })
    }

    static associate(models){
        this.belongsToMany(models.Disciplina, { foreignKey: 'id_curso', through: 'plano_curso', as: 'disciplina' })
        
    }
}

module.exports = Curso