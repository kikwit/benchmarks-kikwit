'use strict';

import { controller, get, route } from 'kikwit';

@route('/')
@controller
export default class Home {

    @route('/zero/params')
    @get
    zero(ctx) {

        ctx.setHeader('Connection', 'close');
        ctx.send('Zero params');    
    }
    
    @route('/one/param/:first')
    @get
    one(ctx) {

        ctx.setHeader('Connection', 'close');
        ctx.send(ctx.params.first);      
    }
    
    @route('/two/params/:first/:second')
    @get
    two(ctx) {

        ctx.setHeader('Connection', 'close');
        ctx.send(ctx.params.first + ctx.params.second);      
    } 
    
    @route('/three/params/:first/:second/:third')
    @get
    three(ctx) {

        ctx.setHeader('Connection', 'close')
        ctx.send(ctx.params.first + ctx.params.second + ctx.params.third);      
    }
}

