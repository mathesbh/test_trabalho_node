var express = require('express');
const controllers = require('../controllers/tarefas');
var router = express.Router();


router.get('/:nomeList', controllers.tarefas);
router.post('/:nomeList', controllers.criarTarefas);

module.exports = router;