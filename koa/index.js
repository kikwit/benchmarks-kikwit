var koa = require('koa');
var app = koa();

app.use(function *(){
  
	this.set('Connection', 'close');
  this.body = 'Zero params';
}); 

app.listen(3000, () => {
  console.log('Koa server listening on port 3000');
});


