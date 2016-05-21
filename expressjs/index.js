var express = require('express');
var app = express();
 
app.get('/zero/params', function (req, res) {
  res.send('Zero params');
}); // 5700 // ab -c 300 -n 200000 http://localhost:3000/zero/params
 
app.get('/one/param/:first', function (req, res) {
  res.send(req.params.first);
}); // 5700 // ab -c 300 -n 200000 http://localhost:3000/one/param/first
 
app.get('/two/params/:first/:second', function (req, res) {
  res.send(req.params.first + req.params.second);
}); // 5550 // ab -c 300 -n 200000 http://localhost:3000/two/params/first/second

app.get('/three/params/:first/:second/:third', function (req, res) {
  res.send(req.params.first + req.params.second + req.params.third);
}); // 5500 // ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third
 
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});


