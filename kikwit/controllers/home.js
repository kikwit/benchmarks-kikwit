'use strict';

import { controller, get, route } from 'kikwit';

@route('/')
@controller
export default class Home {

    @route('/zero/params')
    @get
    zero(ctx) {

        ctx.send('Zero params');    
    } // 7700 // ab -c 400 -n 200000 http://localhost:3000/zero/params
    
    @route('/one/param/:first')
    @get
    one(ctx) {

        ctx.send(ctx.params.first);      
    } // 7215 // ab -c 400 -n 200000 http://localhost:3000/one/param/first
    
    @route('/two/params/:first/:second')
    @get
    two(ctx) {

        ctx.send(ctx.params.first + ctx.params.second);      
    } // 7250 // ab -c 400 -n 200000 http://localhost:3000/two/params/first/second
    
    @route('/three/params/:first/:second/:third')
    @get
    three(ctx) {

        ctx.send(ctx.params.first + ctx.params.second + ctx.params.third);      
    } // 7250 // ab -c 400 -n 200000 http://localhost:3000/three/params/first/second/third      
}

