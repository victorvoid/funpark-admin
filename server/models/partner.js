var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PartnerSchema = new Schema({
  genero: String,
  nome: String,
  dt_nascimento: String,
  rg: String,
  cpf: String,
  estado_civil: String,
  endereco: String,
  complemento: String,
  numero: Number,
  cep: String,
  bairro: String,
  estado: String,
  telefone: Number,
  email: String,
  descricao: String,
  pacote: String,
  atividade: String,
  dependente: Boolean,
  nome_cartao: String,
  numero_cartao: String,
  status_pagamento: Boolean
});

module.exports = mongoose.model('Partners', PartnerSchema);
