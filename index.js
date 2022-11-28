const express = require('express')
const docenteRoutes = require('./routes/docenteRoutes')
const departamentoRoutes = require('./routes/departamentoRoutes')
const app = express()

require('./db')
const port = process.env.port || 3000

app.use('/docente', docenteRoutes)
app.use('/departamento', departamentoRoutes)

app.disable('x-powered-by')
app.use(express.urlencoded({extended : true}))

app.listen(port, () =>
    console.log(`Servidor a rodar em http://localhost:${port}`))

module.exports = app
    