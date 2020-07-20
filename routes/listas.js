var express = require('express');
const controllers = require('../controllers/listas');
var router = express.Router();


router.get('/', controllers.listas);
router.post('/criarList', controllers.criarLista);
router.delete('/deletarLista/:nomeList', controllers.removerLista);

module.exports = router;