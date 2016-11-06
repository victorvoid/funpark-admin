var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PartnerSchema = new Schema({
  name: String,
  email: String,
  status: String
});


module.exports = mongoose.model('Partner', PartnerSchema);
