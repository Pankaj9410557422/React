let intro =["Hello","I","am","Pankaj"];

//......................traditional way to destructure or get values.........

// let var1 = intro[0];
// let var2 = intro[1];
// let var3 = intro[2];
// let var4 = intro[3];

            //second way

// let [var1,var2,var3,var4] = intro;
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);

            //if you want to skip some values

let [var1,var2,,var4]=intro;
console.log(var1);
console.log(var2);
console.log(var4);
