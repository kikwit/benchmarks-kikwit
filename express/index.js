var express = require('express');
var app = express();
 
app.get('/zero/params', function (req, res) {
  res.header('Connection', 'close');
  res.send('Zero params');
});
 
app.get('/one/param/:first', function (req, res) {
  res.header('Connection', 'close');
  res.send(req.params.first);
}); 

app.get('/two/params/:first/:second', function (req, res) {
  res.header('Connection', 'close');
  res.send(req.params.first + req.params.second);
}); 

app.get('/three/params/:first/:second/:third', function (req, res) {
  res.header('Connection', 'close');
  res.send(req.params.first + req.params.second + req.params.third);
});
 
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});


