var Partner = require('../models/partner.js');

exports.save = function(nome, email, dt_nascimento, rg, cpf, estado_civil, endereco, complemento, numero, cep, bairro, estado, telefone, genero, pendente,callback){
  new Partner({
    'nome': nome, 
    'email': email, 
    'dt_nascimento': dt_nascimento, 
    'rg': rg, 
    'cpf': cpf, 
    'estado_civil': estado_civil, 
    'endereco': endereco, 
    'complemento': complemento, 
    'numero': numero, 
    'cep': cep, 
    'bairro': bairro, 
    'estado': estado, 
    'telefone': telefone,
    'genero': genero,
    'pendente': pendente
  }).save(function(err, partner){
    if(err){
      console.log(err);
      callback({error: 'It was not possible to create partner'});
    }else{
      callback(partner);
    }
  });
};


exports.list = function(callback){
  Partner.find({pendente: false}, function(err, partners){
    if(err){
      callback({error: 'It was not possible to found partners'});
    }else{
      callback(partners);
    }
  });
};

exports.pending = function(callback){
  Partner.find({pendente: true}, function(err, partners){
    if(err){
      callback({error: 'It was not possible to found partners'});
    }else{
      callback(partners);
    }
  });
};

exports.delete = function(id, callback){
  Partner.findById(id, function(err, partner){
    if(err){
      callback({error: 'It was not possible delete'});
    }else{
      partner.remove(function(err){
        if(!err){
          callback({response: "Partner deleted"});
        }
      });
    }
  });
};

exports.accepted = function(id, callback){
  Partner.update({_id: id}, {$set: {pendente: false}}, {upsert: true}, function(err, partner){
    if(err){
      callback({error: 'It was not possible accepted'});
    }else{
      Partner.update(function(err){
        if(!err){
          callback({response: "Partner accepted"});
        }
      });
    }
  });
}
