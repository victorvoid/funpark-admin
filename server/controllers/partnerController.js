var Partner = require('../models/partner.js');

exports.save = function(name, email, callback){
  new Partner({
    'name' : name,
    'email': email
  }).save(function(err, partner){
    if(err){
      callback({error: 'It was not possible to create partner'});
    }else{
      callback(partner);
    }
  });
};


exports.list = function(callback){
  Partner.find({}, function(err, partners){
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
