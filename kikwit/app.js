'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.start().then(() => {
    console.log(`Online, PID: ${process.pid}`);
});


