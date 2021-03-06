const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const producto = require('./routes/producto')
const usuario =require('./routes/usuario')
const equipo =require('./routes/equipo')
const proyecto =require('./routes/proyecto')
const cors = require('cors')

//Setting --------------------------------
const app = express()
app.set('port', process.env.PORT || 9000)



//midelware-----------

app.use(express.json())
app.use(cors())

//routes-----------
app.use('/producto', producto)
app.use('/usuario', usuario)
app.use('/equipo', equipo)
app.use('/proyecto', proyecto)

//Server runing --------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})