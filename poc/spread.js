let arr = [1,2,3,4,5,6,7];
console.log(...arr); //arrray ko elements m bread kr dega O/p=> 1,2,3,4,5,6,7

let idx=3;
//insert a no. to index 3 and this inserting should be  a new arr;
// /tradionally
// let narr=[];
// for(let i=0; i<idx;i++){
//     narr[i]=arr[i];
// }
// narr.push(10);
// for(let i=idx;i<arr.length;i++){
//     narr.push(arr[i]);
// }
// console.log(narr);
// console.log(arr);
let narr=[arr.slice(0,idx),10,arr.slice(idx)];  
console.log(narr);  // O/P=> [ [ 1, 2, 3 ], 10, [ 4, 5, 6, 7 ] ]
let narr2=[...arr.slice(0,idx),10,...arr.slice(idx)];
console.log(narr2); //O/P=>[1, 2, 3, 10, 4, 5, 6,  7]
  