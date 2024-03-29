var express = require('express')
  , http = require('http')
  , path = require('path');

var store = store = require('./routes/store');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', store.home);
app.post('/', store.home_post_handler);
//add app.get('/name', store.select (the second part is a function))
app.get('/select', store.select);
app.get('/races', store.races);
app.get('/race/:id', store.race);
app.get('/page', store.page);
// show general pages
app.get('/stats', store.stats);
app.get('/stat/:id', store.stat);
app.get('/logout', function(req, res) {
    // delete the session variable
    delete req.session.username;
    // redirect user to homepage
    res.redirect('/');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
