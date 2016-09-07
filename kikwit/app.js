'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.configure(config => {

    config.addFromService('defaultConfiguration');
    config.addFromService(`${config.environment}Configuration`);
    
    if (config.isEnvironment('development')) {
        config.addUserConfig();
    }
    
    config.addEnvironmentVariables();
});

server.start().then(() => {
    console.log(`Online, PID: ${process.pid}`);
});
