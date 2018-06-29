'use strict';
var EventEmitter = require('events');
class Violin extends EventEmitter{
    constructor(){
        super();
    }
    visit(){
        var temp=this;
        setInterval(function(){temp.emit('note')},1000);
    }
}
var v = new Violin();
v.on('note',function(){
    console.log('violin is playing music');
});
v.visit();