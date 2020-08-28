var checker = {}
const handler = require("../lib/handler");
const nedb = require('nedb-promises'), checkerdb = new nedb({ filename: './src/lib/localdb/checker', autoload: true, timestampData: true })

checker.insert_data = function insert(carrier, data, result){
    /*var db=handler.dbSelector(carrier)*/
    checkerdb.insert(data).then(res=>{
        console.log(res)
        result(null, {message: "Datos insertados"})
    })
}

checker.list_data = function list(filter, result){
    checkerdb.findOne({$or:[{name: URLSearchParams.name}, {lastname: URLSearchParams.lastname}]}).then(rows=>{
        console.log(rows)
        result(null, rows)
    }).catch(error=>{
        console.log(error)
        result(null, error)
    });

}

module.exports=checker;