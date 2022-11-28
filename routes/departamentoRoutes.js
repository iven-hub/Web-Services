const express = require('express')
const {lerTodosDepartamento, lerUmDepartamento, novoDepartamento, AtualizarDepartamento, apagarDepartamento} = require ('../Controllers/departamentocontrollers')

const router = express.Router()
router.use(express.json())


router.get('/', lerTodosDepartamento)
router.get('/:id', lerUmDepartamento)
router.post('/novoDepartamento', novoDepartamento)
router.put('/atualizar/:id_departamento/:nome', AtualizarDepartamento)
router.delete('/delete/:id_dep',apagarDepartamento)
//router.post('/novoDepartamento', novoDepartamento)

module.exports = router