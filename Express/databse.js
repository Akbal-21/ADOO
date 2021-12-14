const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'b1retsjztvixilj2ysmw-mysql.services.clever-cloud.com',  //lovsl host
    port: 3306,   //
    user: 'uolsdysre8zx5i26',   ///root
    password: 'vrhHkg8Uy61t877lFN3C',   //la que tu le asignas
    database: 'b1retsjztvixilj2ysmw'     //nombre de la base
})

mysqlConnection.connect(function(err){
    if (err){
        console.log(err)
        return
    }else{
        console.log('DB is connected')
    }
});

module.exports= mysqlConnection;