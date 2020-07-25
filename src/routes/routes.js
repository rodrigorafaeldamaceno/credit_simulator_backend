const express = require('express')
const propostaController = require('../controllers/propostaController');
const routes = express.Router();


routes.get('/', (req, res) => {
  return res.json({ "status": "online" })
})

routes.post('/proposta', propostaController.store);
routes.get('/propostas', propostaController.index);

module.exports = routes;