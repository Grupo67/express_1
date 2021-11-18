const modelo = require('../model/m_user')
//const mongoose = require('mongoose')

exports.getData = (req,res)=>{
    // res.send({data: "esto viene de componentes mm"})
    modelo.find({},(err,docs)=>{
        res.send({
            docs
        })
    })
}

exports.insertData = (req, res)=>{
    const data = req.body
    //res.send({data})
    modelo.create(data,(err, docs)=>{
//    modelo.create(data,(err, docs)=>{
       if(err){
           console.log('error', err)
           res.send({error: err}, 401)
       }else{
           res.send({data: docs})
       }
   })
}

