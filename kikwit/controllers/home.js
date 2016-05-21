'use strict';

import { controller, get, route } from 'kikwit';

@route('/')
@controller
export default class Home {

    @route('/zero/params')
    @get
    zero(ctx) {

        ctx.send('Zero params');    
    } // 8000 // ab -c 300 -n 200000 http://localhost:3000/zero/params
    
    @route('/one/param/:first')
    @get
    one(ctx) {

        ctx.send(ctx.params.first);      
    } // 7500 // ab -c 300 -n 200000 http://localhost:3000/one/param/first
    
    @route('/two/params/:first/:second')
    @get
    two(ctx) {

        ctx.send(ctx.params.first + ctx.params.second);      
    } // 7500 // ab -c 300 -n 200000 http://localhost:3000/two/params/first/second
    
    @route('/three/params/:first/:second/:third')
    @get
    three(ctx) {

        ctx.send(ctx.params.first + ctx.params.second + ctx.params.third);      
    } // 7500 // ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third      
}

