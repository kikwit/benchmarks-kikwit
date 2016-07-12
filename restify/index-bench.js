var restify = require('restify');
var server = restify.createServer();
 
server.get('/zero/params', function (req, res, next) {
  res.set('Connection', 'close');
  res.send('Zero params');
  next();
}); // 4850 // ab -c 300 -n 200000 http://localhost:3000/zero/params
 
server.get('/one/param/:first', function (req, res, next) {
  res.set('Connection', 'close');
  res.send(req.params.first);
  next();
}); // 4850 // ab -c 300 -n 200000 http://localhost:3000/one/param/first
 
server.get('/two/params/:first/:second', function (req, res, next) {
  res.set('Connection', 'close');
  res.send(req.params.first + req.params.second);
  next();
}); // 4800 // ab -c 300 -n 200000 http://localhost:3000/two/params/first/second

server.get('/three/params/:first/:second/:third', function (req, res, next) {
  res.set('Connection', 'close');
  res.send(req.params.first + req.params.second + req.params.third);
  next();
}); // 4800 // ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third
 
server.listen(3000, () => {
  console.log('Restify - Benchmark start...');
});


