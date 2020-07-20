const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    email: { type: String},
    nomeList : { type: String},
    descricaoList: {type: String}
});

const Lista = mongoose.model('Lista', listaSchema)

module.exports = Lista