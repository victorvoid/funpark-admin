var express = require('express');
var router = express.Router();
var partnerController = require('../controllers/partnerController.js');
var userController = require('../controllers/userController.js');


function getToken(req, res, next){
  var header = req.headers['authorization'];

  if(typeof header !== 'undefined'){
    req.token = header;
    next();
  }else{
    res.sendStatus(403);
  }
}


router.get('/', getToken, function(req, res){
  var token = req.token;
  userController.authorize(token, function(resp){
    if(resp === true){
        partnerController.list(function(resp){
        res.json(resp);
        });
    }else{
      res.sendStatus(303); //status de proibido
    }
  });

});
/*
  /register
  Faz o registro de um Sócio.
*/
router.post('/register', function(req, res){
  //Fields
  var nome          = req.body.nome;
  var dt_nascimento = req.body.dt_nascimento;
  var rg            = req.body.rg;
  var cpf           = req.body.cpf;
  var estado_civil  = req.body.estado_civil;
  var endereco      = req.body.endereco;
  var complemento   = req.body.complemento;
  var numero        = req.body.numero;
  var cep           = req.body.cep;
  var bairro        = req.body.bairro;
  var estado        = req.body.estado;
  var telefone      = req.body.telefone;
  var email         = req.body.email;
  var descricao     = req.body.descricao;
  var pacote        = req.body.pacote;
  var atividade     = req.body.atividade;
  var dependente    = req.body.dependente;
  var nome_cartao   = req.body.nome_cartao;
  var numero_cartao = req.body.numero_cartao;
  var status_pagamento = req.body.status_pagamento;
  var email         = req.body.email;
  var genero         = req.body.genero;

  partnerController.save(nome, email, dt_nascimento, rg, cpf, estado_civil, endereco, complemento, numero, cep, bairro, estado, telefone, genero, function(resp){
    res.json(resp);
  });
});

router.delete('/delete/:id', function(req, res){
  var id = req.params.id;
  console.log('id: ',id);
  partnerController.delete(id, function(resp){
    res.json(resp);
  });
});

module.exports = router;
