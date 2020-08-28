'use strict'

const express = require("express")
const bodyParser = require("body-parser")
require('./lib/mariaDB')

const app = express();

    app.use(bodyParser.json())
    app.use(require('./routes/checker.routes'))
app.set('port', 4005);

       
    app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`)
    });
    