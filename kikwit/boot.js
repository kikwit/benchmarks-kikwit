'use strict';

global.KIKWIT_APPLICATION_ROOT = __dirname;

require('babel-core/register')({
  ignore: /node_modules\/(?!kikwit\/)/  
});   

require('./app');
