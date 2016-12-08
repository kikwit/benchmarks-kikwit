'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.configure(config => {

    config.addJavaScriptFile('config/default.js');
});

server.start().then(() => {
    console.log('kikwit - Server started');
});