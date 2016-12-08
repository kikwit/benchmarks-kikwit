'use strict';

import { Server } from 'kikwit';
 
const server = new Server();

server.configure(config => {

    config.addJavaScriptFile('config/default.js');
    config.addJavaScriptFile(`config/${config.environment}.js`, true);    
 
    if (config.isEnvironment('development')) {
        config.addUserConfig();
    }
    
    config.addEnvironmentVariables();  
});

server.start().then(() => {
    console.log(`Online, PID: ${process.pid}`);
});