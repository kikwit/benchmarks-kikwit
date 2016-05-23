var server = require('diet')
var app = server()

app.get('/zero/params', $ => {
  $.end('Zero params');
}); // 5315 req/sec  // ab -c 300 -n 200000 http://localhost:3000/zero/params
 
app.get('/one/param/:first', $ => {
  $.end($.params.first);
}); // 4900 req/sec  // ab -c 300 -n 200000 http://localhost:3000/one/param/first
 
app.get('/two/params/:first/:second', $ => {
  $.end($.params.first + $.params.second);
}); // 4850 req/sec  // ab -c 300 -n 200000 http://localhost:3000/two/params/first/second

app.get('/three/params/:first/:second/:third', $ => {
  $.end($.params.first + $.params.second + $.params.third);
}); // 4800 req/sec  // ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third
 
app.listen('http://localhost:3000');


