//const Sequelize = require('sequelize')
const conn = require('../config/database')

const Sequelize = require('sequelize')
const db_config = require('../config/database')
const dbConn = new Sequelize(conn)
const ligar = async () => {
  try {
    await dbConn.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
ligar();


const Curso = require('../models/Curso')
const Disciplina = require('../models/Disciplina')
const Departamento  = require('../models/Departamento')
const Docente = require('../models/Docente')

Curso.init(dbConn)
Disciplina.init(dbConn)
Departamento.init(dbConn)
Docente.init(dbConn)

module.exports = dbConn

