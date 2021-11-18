const express = require('express')
const componente = require('../componentes/datos')
const ruta    = express.Router() //defino express con el metodo de rutas
const path    = 'r_user' //nombre inicial de la ruta

ruta.get(
    '/r_user', componente.getData
    //`/${path}`, componente.getData
    // '/',
    // (req,res)=>{
    //     res.send('hola a todos')
    // }
    
)

ruta.post('/r_user', componente.insertData)

module.exports = ruta