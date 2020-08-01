const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    email : { 
        type: String
    },
    nomeLista: {
        type: String
    }
});

const Lista = mongoose.model('Lista', listaSchema)

module.exports = Lista