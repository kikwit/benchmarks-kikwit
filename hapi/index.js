"use strict";

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 3000 
});

server.route({
    method: 'GET',
    path:'/zero/params', 
    handler: function (request, reply) {

        return reply('Zero params');
    }
}); // 3100 // ab -c 300 -n 200000 http://localhost:3000/zero/params 

server.route({
    method: 'GET',
    path:'/one/param/:first', 
    handler: function (request, reply) {

        return reply(request.params.first);
    }
});  // 2790 // ab -c 300 -n 200000 http://localhost:3000/one/param/first

server.route({
    method: 'GET',
    path:'/two/params/:first/:second', 
    handler: function (request, reply) {

        return reply(request.params.first + req.params.second);
    }
}); // 2770 // ab -c 300 -n 200000 http://localhost:3000/two/params/first/second

server.route({
    method: 'GET',
    path:'/three/params/:first/:second/:third', 
    handler: function (request, reply) {

        return reply(request.params.first + req.params.second + req.params.third);
    }
}); // 2900 // ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Hapi server listening on port 3000');
});

