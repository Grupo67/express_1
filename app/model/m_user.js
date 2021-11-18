const mongoose = require('mongoose')

//esquema o estructura del documento usuario
const esquema_user = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        // documento: {
        //     type: Number,
        //     unique: true,
        //     required: true
        // },
        email: {
            type: String,
            unique: true,
            //required: true
        }
    }
)

module.exports = mongoose.model('user', esquema_user, 'main')