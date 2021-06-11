let arr =[1,2,3,4,5];
// ......................................Map ...................................
                    // traditional way 
// let darr = [];
// for(let i=0; i<arr.length;i++){
//     darr[i]=2*arr[i];
// }
// console.log(darr);

                    // The map way 
                    // It is a higher order function 
                    // either accepts a func as argument or returs a function 
// let darr = arr.map(function(el){
//     return 2*el;
// })

// console.log(darr);

//......................................Filter...........................
                        //traditional way
let words = ['split','spring','flower','cat', 'flag', 'map', 'polite']
// let farr = [];
// for(let i=0; i<words.length;i++){
//     if(words[i].length >4){
//         farr.push(words[i]);
//     }
// }
// console.log(farr);

                    //the filter way
                    //Returns the elements of an array that meet the condition 
                    // specified in a callback function.
// let darr =  words.filter(function(el){
//     return el.length > 4;
// })
// console.log(darr);

// .......................................Reduce...........................
                    //traditional way
                    //returns a single value
// let sum1 =0;
// for(let i=0; i<arr.length;i++){
//     sum1+=arr[i];
// }
// console.log(sum1);

                     //the reduce way
                    // acc->initial at start takes arr[0];
                    //currVal ->initial at start takes arr[1]
                    // after words the val of acc becomes the value of sum that time and
                    //currVal points to next indexes
                    //eg. for second time acc=3(previous sum) and currVal =3(current val)
let sum2 = arr.reduce(function(acc,currVal){
    console.log('acc ->'+acc+' curVal ->'+ currVal);
    return (acc+currVal);
})
console.log(sum2);