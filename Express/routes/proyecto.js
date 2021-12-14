
const express = require('express')
const routes = express.Router()
const mysqlConnection = require('../databse')

routes.get('/', (req, res) => {
    const Nombre = req.body.Nombre
    const query = `
        SELECT  * FROM Equipo; 
    `

    mysqlConnection.query(query, [Nombre], (err, rows) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})

routes.post('/user/', (req, res) => {

    const Nombre = req.body.Nombre
    const query = `
        CALL b1retsjztvixilj2ysmw.Most_intg (?);
    `

    mysqlConnection.query(query, [ Nombre], (err, rows) => {
        if (!err) {
            res.send(rows[0])
        } else {
            res.send(err)
        }
    })
})

routes.post('/proy/', (req, res) => {

    const Nombre = req.body.Nombre
    const Descripcion = req.body.Description
    const query = `
        CALL b1retsjztvixilj2ysmw.Nuevo_proyecto (?, ?);
    `

    mysqlConnection.query(query, [ Nombre, Descripcion], (err, rows) => {
        if (!err) {
            res.send(rows[0])
        } else {
            res.send(err)
        }
    })
})

routes.post('/idproy/', (req,res) => {
    const Nombre = req.body.Nombre
    const query = `
        select idProyecto from Proyecto where Nombre = ?
    `
    mysqlConnection.query(query, [Nombre], (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }
    })
})

routes.get('/cargo/', (req, res) => {
    const query=`
    SELECT * FROM Cargo
    `
    mysqlConnection.query(query,(err, rows) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})

routes.post('/task/', (req, res) => {
    const Nombre = req.body.Nombre
    const Descripcion = req.body.Descripcion
    const tiempo = req.body.tiempo
    const Estado = req.body.Estado
    const idintegrante = req.body.idintegrante
    const idproyecto = req.body.idproyecto
    const idEquipo = req.body.idEquipo
    const query=`
    Call b1retsjztvixilj2ysmw.insert_task (?, ?, ?, ?, ?, ?, ?)
    SELECT * FROM Tareas WHERE idEquipo = ?;
    `
    mysqlConnection.query(query, [Nombre, Descripcion, tiempo, Estado, idintegrante, idproyecto, idEquipo, idEquipo],(err, rows) => {
        if (!err) {
            res.send(rows)
        } else {
            res.send(err)
        }
    })
})



module.exports = routes