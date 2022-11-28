const Docente = require('../models/Docente')
const User = require('../models/User')
const { Op, QueryTypes } = require("sequelize")
// var SQL = require('sql-template-strings')
const bcrypt = require('bcrypt')
//const { Sequelize } = require('sequelize')R
const db = require('../db/index')
//const sequelize = new Sequelize(db_config)
//require('dotenv').config()

const defaultPass = process.env.default_user_password;

module.exports = {

    lerUmDocente: async (req, res) => {
        const { id } = req.params
        try {
            const docente = await Docente.findByPk(id)
            if (!docente) return res.status(400).json({ "ERROR": "Docente Não encontrado" })
            return res.status(200).json(docente)

        } catch (error) {
            return res.status(500).json(error)

        }
    },

    lerTodosDocentes: async (req, res) => {
        try {
            console.log("docente")

            const docente = await Docente.findByPk(1)
            console.log("docente")
            console.log(docente)
            const docentes = await Docente.findAll()
            return res.status(200).json(docentes)
        }
        catch (error) {
            //console.log(res.json(error))
            return res.status(500).json(error.message)
        }
    },
    novoDocente : async (req, res) => {
        const { sigla, nome, nome_completo, grau, area, email, tipo_contrato } =
            req.body;
        const pE1 = nome_completo.substring(0, nome_completo.indexOf(' '));
        const pE2 = nome_completo.substring(nome_completo.lastIndexOf(' '));
        let usernNane = pE1 + pE2;
        try {
            const docente = await Docente.create({
                sigla,
                nome,
                nome_completo,
                grau,
                area,
                tipo_contrato,
                id_user: null,
            });

            if (!docente)
                return res
                    .status(400)
                    .json({
                        Error:
                            'Não foi possível processar pedido. Verifique se os parâmetros estão corretos',
                    });
            const password = await bcrypt.hash(defaultPass, await bcrypt.genSalt(10));

            const user = await User.create({
                nome,
                username: usernNane,
                email,
                password,
                categoria: 'docente',
            });

            if (!user) {
                await Docente.destroy({ where: { id: docente.dataValues.id } });
                return res
                    .status(400)
                    .json({
                        Error:
                            'Não foi possível processar pedido. Verifique se os parâmetros estão corretos',
                    });
            }
            const { id: id_user } = user.dataValues;
            console.log(id_user);
            console.log(docente.id);
            await Docente.update({ id_user }, { where: { id: docente.id } });
            res.status(201).json({ docente, user });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
   