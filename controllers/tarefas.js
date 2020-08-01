const Tarefa = require('../models/Tarefas');
const router = require('../routes/tarefas');

module.exports = {
    async tarefas(req, res){
        if(req.session.autorizado !== true) return res.render('index', { acesso : true })
            
        const idLista = req.params.idLista;
        await Tarefa.find({ idLista }, function(err, tarefas){
            res.render('tarefas', { tarefas, idLista })
        })
    },

    async criarTarefas(req, res){
        const idLista = req.params.idLista;
        await Tarefa.create({
            idLista,
            nomeTarefa : req.body.nomeTarefa,
        })
        
        res.redirect(`/tarefas/${idLista}`)
    },

    async removerTarefas(req, res){
        const idLista = req.params.idLista
        const idTarefa = req.body.idTarefa
        await Tarefa.findByIdAndRemove({ _id : idTarefa })
        
        res.redirect(`/tarefas/${idLista}`)

    },

    async concluirTarefas(req, res){
        const idLista = req.params.idLista
        const idTarefa = req.query.idTarefa
        
        await Tarefa.findByIdAndUpdate({ _id: idTarefa }, { concluido: true })

            res.redirect(`/tarefas/${idLista}`)
    },

    async desmarcarTarefas(req, res){
        const idLista = req.params.idLista
        const idTarefa = req.query.idTarefa
        
        await Tarefa.findByIdAndUpdate({ _id: idTarefa }, { concluido: false })

            res.redirect(`/tarefas/${idLista}`)
    },


    async editarTarefas(req, res){
        const idLista = req.params.idLista
        const dados = req.query

        if(dados.nomeTarefa == '') return res.redirect(`/tarefas/${idLista}`)

        await Tarefa.findByIdAndUpdate({ _id: dados.idTarefa }, { nomeTarefa: dados.nomeTarefa })

        res.redirect(`/tarefas/${idLista}`)
        
    }

}