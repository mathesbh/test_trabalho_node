const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    idLista: { 
        type: String
    },
    nomeTarefa : {
         type: String
    },
    concluido : {
        type: Boolean,
        default: false
    }
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;