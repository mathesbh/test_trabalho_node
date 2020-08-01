var express = require('express');
const controllers = require('../controllers/tarefas');
var router = express.Router();


router.get('/:idLista', controllers.tarefas);
router.post('/criarTarefa/:idLista', controllers.criarTarefas);
router.post('/removerTarefa/:idLista', controllers.removerTarefas);
router.get('/concluirTarefa/:idLista', controllers.concluirTarefas);
router.get('/desmarcarTarefa/:idLista', controllers.desmarcarTarefas);
router.get('/editarTarefa/:idLista', controllers.editarTarefas);

module.exports = router;