const express = require('express');
const router = express.Router();
const controller = require('../Controllers/automovel-controller')

router.get('/', controller.BuscarTodos);
router.get('/:placa', controller.BuscarPorPlaca);
router.post('/', controller.Salvar);

module.exports = router;