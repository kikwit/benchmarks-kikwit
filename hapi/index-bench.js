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

        return reply('Zero params').header('Connection', 'close');
    }
}); 

server.route({
    method: 'GET',
    path:'/one/param/:first', 
    handler: function (request, reply) {

        return reply(request.params.first).header('Connection', 'close');
    }
}); 

server.route({
    method: 'GET',
    path:'/two/params/:first/:second', 
    handler: function (request, reply) {

        return reply(request.params.first + req.params.second).header('Connection', 'close');
    }
}); 

server.route({
    method: 'GET',
    path:'/three/params/:first/:second/:third', 
    handler: function (request, reply) {

        return reply(request.params.first + req.params.second + req.params.third).header('Connection', 'close');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Hapi - Server started');
});

