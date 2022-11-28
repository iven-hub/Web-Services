const express = require('express')
const {lerTodosDocentes, lerUmDocente, novoDocente} = require ('../Controllers/docenteControllers')

const router = express.Router()
router.use(express.json())

router.get('/', lerTodosDocentes)
router.get('/:id', lerUmDocente)
router.post('/novoDocente', novoDocente)

module.exports = router

