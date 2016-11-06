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

router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  partnerController.save(name, email,function(resp){
    res.json(resp);
  });
});

router.delete('/delete/:id', function(req, res){
  var id = req.params.id;
  partnerController.delete(id, function(resp){
    res.json(resp);
  });
});

module.exports = router;
