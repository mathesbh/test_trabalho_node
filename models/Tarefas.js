const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    email : {type: String},
    nomeList: { type: String},
    nomeTarefa : { type: String},
    descricaoTarefa: {type: String}
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;