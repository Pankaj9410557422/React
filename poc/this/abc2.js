// function fn(){
//     // 'use strict' //when used it causes the value of this when called without an objeect to be undefined
//     console.log(`Hi my name is ${this.person}`);
//     console.log(this);
//     function abc(){
//         console.log(this.person);
//     }
//     abc();
// }
// let obj={
//     person:"Pankaj",
//     func:fn
// }
// obj.func(); 

//O/P=>
        // Hi my name is Pankaj 
        // Object
        //undefined  ->window wla this jaega-->it does not deppent when and where called how it is called is important



        //...................................Bind............


// function fn(){
//     // 'use strict' //when used it causes the value of this when called without an objeect to be undefined
//     console.log(`Hi my name is ${this.person}`);
//     console.log(this);
//     function abc(){
//         console.log(this.person);
//     }
//     let rf = abc.bind(this);
//     rf();
// }
// let obj={
//     person:"Pankaj",
//     func:fn
// }
// obj.func();

// ...............................Arrow fn........

function fn(){
    // 'use strict' //when used it causes the value of this when called without an objeect to be undefined
    console.log(`Hi my name is ${this.person}`);
    console.log(this);
    let abc = ()=>{
        console.log(this.person);
    }
    abc();
}
let obj={
    person:"Pankaj",
    func:fn
}
obj.func();

