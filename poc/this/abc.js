// console.log(this);
var a=5;
console.log(a);

function fn(){
    // 'use strict' //when used it causes the value of this when called without an objeect to be undefined
    console.log(`Hi my name is ${this.person}`);
    console.log(this);
}
let obj={
    person:"Pankaj",
    func:fn
}
// fn();
obj.func();
let rf = obj.func;
rf();