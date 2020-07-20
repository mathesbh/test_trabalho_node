var express = require('express');
const controllers = require('../controllers/index');
var router = express.Router();


router.get('/', controllers.home);
router.post('/autenticar', controllers.autenticar);


module.exports = router;
