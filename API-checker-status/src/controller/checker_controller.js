const handler = require("../lib/handler");
const checker = require("../models/checker_model");

var checker_controller = {
    list_rows: (req, res)=>{
        var params = req.query
        var query = req.query
        if(handler.validateCarrier(query.carrier)==false){
            res.send({message:"carrier invalido"})
        }else{
            var filter={}
           checker.list_data(filter, function(err, data){
               if(err){
                   res.send(data)
               }else{
                console.log(data)   
                res.send(data)
               }
           })
        }
    },
    insert_rows: (req, res)=>{
        var query = req.query
        if(handler.validateCarrier(query.carrier)==false){
            res.send({message:"carrier invalido"})
        }else{
            var body=req.body
            console.log(body)
            checker.insert_data(query.carrier, body, function(err, data){
                if(err){
                    res.send({message:"Error al insertar datos"})
                }else{
                    res.send(data)
                }
            });
        }
    }
}

module.exports = checker_controller;