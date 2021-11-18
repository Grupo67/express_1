const mongoose = require('mongoose')

const db_url = 'mongodb://127.0.0.1:27017/my_app'

//procedo a crear el modulo para exportar
module.exports = ()=>{
    const conex = ()=>{ //funcion que contiene la conexion con mogo db
        mongoose.connect(
            db_url,
            {
                keepAlive: true,
                useNewUrlparser: true,
                useUnifiedTopology: true
            },

            (error)=>{
                if (error){
                    console.log('existe un error en la conexion');
                }else{
                    console.log('la conexion fue exitosa');
                }
            }
        )
    }
    conex();
}