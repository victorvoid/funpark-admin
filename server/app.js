var app = require('./config/app_config.js');
var db  = require('./config/db_config.js');

var Partner = require('./models/partner.js');
var partnerController = require('./controllers/partnerController.js');
var partner = require('./routes/partnerRouter.js');

var user = require('./routes/userRouter.js');

app.get('/', function(req, res){
  res.end('Welcome api of the funpark');
});

//routes of partner
app.use('/partners', partner);
app.use('/users', user);
