'use strict'

const mariadb = require('mariadb');

const dbclarogt = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "DBPracticas",
    connectionLimit: 1
}).on('connection', con => {
    console.log('Pool ClaroGT Created, connection id:', con.threadId)
})

global.dbclarogt = dbclarogt;