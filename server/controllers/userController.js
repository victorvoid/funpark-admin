var User = require('../models/user.js');

exports.save = function(name, password, callback){
  User.findOne({'name': name}, function(err, user){
    if(err){
      callback('Error ao salvar');
    }else if(user){
      callback('Usuario ja existe');
    }else{
      var newUser = new User();
      newUser.name = name;
      newUser.password = newUser.generatePassword(password);
      newUser.token    = newUser.generateToken(name, password);
      newUser.save(function(err, user){
        if(err){
          callback('deu erro');
        }else{
          callback(user);
        }
      });
    }
  });
};


exports.login = function(name, password, callback){
  User.findOne({'name': name}, function(err, user){
    if(err){
      callback('deu error');
    }else if(user){
      if(user.validatePassword(password)){
        callback(user.token);
      }else{
        callback('Senha incorreta');
      }
    }else{
      callback('Usuário não existe!');
    }
  });
};

exports.list = function(token, callback){
  User.findOne({'token': token}, function(err, user){
    if(err){
      callback('Deu erro no metodo list');
    }else if(user){
      callback({name: user.name});
    }else{
      callback('Usuário não encontrado!');
    }
  });
};

//procura se tem algum usuario com esse token, pra poder ser autorizado
exports.authorize = function(token, callback){
  User.findOne({'token': token}, function(err, user){
    if(err){
      callback(false);
    }else if(user){
      callback(true);
    }else{
      callback(false);
    }
  });
};
