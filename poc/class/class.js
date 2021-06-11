// class abc{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.sayHi=this.sayHi.bind(this);
//     }
//     sayHi(){
//         console.log("Hello");
//         console.log(this.name);
//         console.log(this);
//     }
// }
// let obj = new abc("Pankaj",23);
// // console.log(obj); 
// // obj.sayHi();

// // Below2 line will give error .why? => calsses by default use strict krta h or 
// //jb neeche call kiyato ussey koi idea nhi h obj ka
// // let ret = obj.sayHi;
// // ret();

// let btn = document.querySelector("button");
// btn.addEventListener('click',obj.sayHi);
class abc{
    constructor(name,age){
        this.name=name;
        this.age=age;
    } 
    sayHi=()=>{
        console.log("Hello");
        console.log(this.name);
        console.log(this);
    }
}
let obj = new abc("Pankaj",23);


let btn = document.querySelector("button");
btn.addEventListener('click',obj.sayHi);    