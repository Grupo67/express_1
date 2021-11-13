const express = require('express')
const app     = express() //contiene nuestra app - hace el instanciamiento de express
const port    = 5001 //puerto por donde corre la app
const rutass  = require('./app/rutas/r_user')//importo el archivo r_user.js

// app.get('/', (req,res)=>{ //cuando la app se llama por el metodo get y la ruta es la raiz "/" ejecuta lo siguiente:
//     res.send({data: 'hola mundo'})
// })
app.use(rutass)

app.listen(port, ()=>{// le indico que corra por el puerto 5001 y cuando eso pase que muestre lo siguiente:
    console.log('la app esta ok'); 
})

