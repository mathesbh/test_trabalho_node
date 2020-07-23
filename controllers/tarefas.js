const Tarefa = require('../models/Tarefas');
const router = require('../routes/tarefas');

module.exports = {
    async tarefas(req, res){
        if(req.session.autorizado !== true){
            res.send('Usuário precisa fazer login');
            return;
        } else {
            const email = req.session.email;
            const nomeList = req.params.nomeList;
        await Tarefa.find({ nomeList : nomeList}, function(err, result){
            console.log(result)
            res.render('tarefas', {result, nomeList : nomeList});
            
        })
        }
    },

    async criarTarefas(req, res){
        const email = req.session.email
        const nomeList = req.params.nomeList;
        await Tarefa.create({
            email,
            nomeList,
            nomeTarefa : req.body.nomeTarefa,
            descricaoTarefa : req.body.descricaoTarefa
        })
        
        res.redirect(`/tarefas/${nomeList}`);
    },

}