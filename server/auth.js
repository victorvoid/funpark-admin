var passport = require('passport');
var passportJWT = require('passport-jwt');

var ExtractJwt = passportJWT.ExtractJwt;
var Strategy   = passportJWT.Strategy;

module.exports = function app(){

  var Partner = app.datasource.models.Partner;

};
