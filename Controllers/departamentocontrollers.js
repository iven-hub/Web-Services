const User = require('../models/User')
const { Op, QueryTypes } = require("sequelize")
// var SQL = require('sql-template-strings')
const bcrypt = require('bcrypt')
//const { Sequelize } = require('sequelize')
const db = require('../db/index')
const Departamento = require('../models/Departamento')

const defaultPass = process.env.default_user_password;

module.exports = {
    lerUmDepartamento: async (req, res) => {
        const { id } = req.params
        try {
            const departamento = await Departamento.findByPk(id)
            if (!departamento) return res.status(400).json({ "ERROR": "Departamento Não encontrado" })
            return res.status(200).json(departamento)

        } catch (error) {
            return res.status(500).json(error)

        }
    },

lerTodosDepartamento: async (req, res) => {
    try {
        console.log("departamento")

        const departamento = await Departamento.findByPk(1)
        console.log("departamento")
        console.log(departamento)
        const departamentos = await Departamento.findAll()
        return res.status(200).json(departamentos)
    }
    catch (error) {
        //console.log(res.json(error))
        return res.status(500).json(error.message)
    }
},

//novoDepartamento: async (req, res) => {
 //   const { nome } = req.body;
   // try {
     //   const departamento = await Departamento.create({ nome });

       // if (!departamento)
         //   return res.status(400).json({
           //     Error:
             //       'Não foi possível processar pedido. Verifique se os parâmetros estão corretos',
           // });

       // res.status(201).json({ departamento });
   // } catch (error) {
     //   return res.status(500).json(error);
    //}
//},
novoDepartamento : async (req, res) => {
    const { nome } = req.body
  
    try {
      const departamento = Departamento.create({ nome });
 
      if (!departamento) {
        return res.status(400).json({
          Error:
            'Nao foi possivel processar pedido.Verifca se os paramentros estao corretos',
        })
      }
      return res.status(201).json(departamento)
    } catch (error) {
      return res.status(500).json(error)
    }
  },

AtualizarDepartamento: async (req, res) => {
    const { id_departamento, nome } = req.params;
    try {
        const departamento = await Departamento.update({ nome }, { where: { id: id_departamento } })

        res.status(200).json({ departamento });
    } catch (error) {
        return res.status(500).json(error);
    }
},
apagarDepartamento: async (req, res) => {
    const { id_dep } = req.params;
    try {
        const departamento = await Departamento.destroy({ where: { id: id_dep } });

        res.status(200).json({ departamento });
    } catch (error) {
        return res.status(500).json(error);
    }
}
}
