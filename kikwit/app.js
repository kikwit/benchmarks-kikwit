'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.start().then(() => {
    console.log('Kikwit server listening on port 3000');
});


