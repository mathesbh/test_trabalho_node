var express = require('express');
const controllers = require('../controllers/listas');
var router = express.Router();


router.get('/', controllers.listas);
router.post('/criarLista', controllers.criarLista);
router.get('/removerLista/:idLista', controllers.removerLista);
router.get('/editarLista/:idLista', controllers.editarLista);
router.get('/sair', controllers.sair);

module.exports = router;