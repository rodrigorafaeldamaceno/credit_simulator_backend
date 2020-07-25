const Proposta = require('../models/propostaModel')

module.exports = {
  async store(req, res) {
    const {
      email,
      telefone,
      cpf,
      ramo,
      data,
      taxaCreditoConcorrente,
      descontoCreditoConcorrente,
      taxaDebitoConcorrente,
      descontoDebitoConcorrente,
      taxaCredito,
      descontoCredito,
      taxaDebito,
      descontoDebito } = req.body;

    if (!email ||
      !telefone ||
      !cpf ||
      !ramo ||
      !data ||
      !taxaCreditoConcorrente ||
      !descontoCreditoConcorrente ||
      !taxaDebitoConcorrente ||
      !descontoDebitoConcorrente ||
      !taxaCredito ||
      !descontoCredito ||
      !taxaDebito ||
      !descontoDebito) {
      res.status(400)
      return res.json({ "erro": "Todos os parâmetros são obrigatórios" })
    }

    const proposta = await Proposta.create({
      email,
      telefone,
      cpf,
      ramo,
      data,
      taxaCreditoConcorrente,
      descontoCreditoConcorrente,
      taxaDebitoConcorrente,
      descontoDebitoConcorrente,
      taxaCredito,
      descontoCredito,
      taxaDebito,
      descontoDebito
    });

    return res.json(proposta);
  },

  async index(req, res) {
    const propostas = await Proposta.find();

    return res.json(propostas);
  }
}