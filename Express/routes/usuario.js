const express = require('express')
const routes = express.Router()
const mysqlConnection = require('../databse')


routes.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, field) => {
        if (!err) {
            res.json(rows)
        } else {
            res.send(err)
        }
    })
})

routes.post('/user1/', (req, res) => {

    const Correo = req.body.Correo
    const Contrasena = req.body.Contrasena
    const query = `
        CALL b1retsjztvixilj2ysmw.logginUser (?, ?)
    `

    mysqlConnection.query(query, [Correo, Contrasena], (err, rows) => {
        if (!err) {
            res.send(rows[0])
        } else {
            res.send(err)
        }
    })
})

routes.post('/', (req, res) => {

    const query = `
            CALL b1retsjztvixilj2ysmw.registroUsuario (?, ?, ?, ?, ?);
        `
    const Nombre = req.body.Nombre
    const ApMat = req.body.ApMat
    const ApPat = req.body.ApPat
    const Correo = req.body.Correo
    const Contrasena = req.body.Contrasena

    mysqlConnection.query(query, [Nombre, ApPat, ApMat, Correo, Contrasena], (err, result) => {
        if (!err) {
            res.send('Registro completo!');
        } else {
            res.send(err)
        }
    })
})

routes.delete('/:id/', (req, res) => {
    const id = req.params.id
    mysqlConnection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.send('Usuario borrado!')
        } else {
            res.send(err)
        }

    })
})

routes.put('/:id', (req, res) => {
    mysqlConnection.query('UPDATE usuario set ? WHERE id = ?', [req.body, req.params.id], (err) => {
        if (!err) {
            res.send('Usuario updated!')
        } else {
            res.send(err)
        }
    })
})

module.exports = routes