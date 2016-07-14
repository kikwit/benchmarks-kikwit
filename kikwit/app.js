'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.start().then(() => {
    console.log('Kikwit - Server started');
});


