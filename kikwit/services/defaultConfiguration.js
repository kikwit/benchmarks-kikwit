'use strict';

import { service } from 'kikwit';

@service('defaultConfiguration')
export class DefaultConfiguration {

    get configuration() {
    
        return {
            
            cluster: false,
            route: {
                overview: true  
            },
            server: {
                port: 3000
            }
        }
    }
}

