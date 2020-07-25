const moongose = require('../database/database')

const PropostaSchema = new moongose.Schema({
  data: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  ramo: {
    type: String,
    required: true
  },
  concorrente: {
    type: String,
    required: true
  },
  taxaCreditoConcorrente: {
    type: Number,
    required: true
  },
  descontoCreditoConcorrente: {
    type: Number,
    required: true
  },
  taxaDebitoConcorrente: {
    type: Number,
    required: true
  },
  descontoDebitoConcorrente: {
    type: Number,
    required: true
  },
  taxaCredito: {
    type: Number,
    required: true
  },
  descontoCredito: {
    type: Number,
    required: true
  },
  taxaDebito: {
    type: Number,
    required: true
  },
  descontoDebito: {
    type: Number,
    required: true
  },
})

module.exports = moongose.model('Proposta', PropostaSchema);