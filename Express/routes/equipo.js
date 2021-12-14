
const express = require('express')
const routes = express.Router()
const mysqlConnection = require('../databse')

routes.post('/', (req, res) => {

    const Nombre = req.body.Nombre
    const query = `
        CALL b1retsjztvixilj2ysmw.Nuevo_Equipo (?)
    `

    mysqlConnection.query(query, [Nombre], (err, rows) => {
        if (!err) {
            res.send(rows[0])
        } else {
            res.send(err)
        }
    })
})

routes.post('/add/', (req, res) => {

    const Correo = req.body.Correo
    const Nombre = req.body.Nombre
    const cargo = req.body.cargo
    const query = `
        CALL b1retsjztvixilj2ysmw.Add_Partner (?, ?, ?)
    `

    mysqlConnection.query(query, [Correo, Nombre, cargo], (err, rows) => {
        if (!err) {
            res.send(rows[0])
        } else {
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


module.exports = routes

