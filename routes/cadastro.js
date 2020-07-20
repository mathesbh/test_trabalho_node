var express = require('express');
const controllers = require('../controllers/cadastro');
var router = express.Router();


router.get('/', controllers.cadastro);
router.post('/cadastrar', controllers.cadastrar);


module.exports = router;
