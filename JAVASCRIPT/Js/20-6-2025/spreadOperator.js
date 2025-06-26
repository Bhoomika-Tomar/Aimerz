const arr=[1,2,3,4,5];
const names=["Peter Parker","Loki Odinson","Thor Odinson","Captain America","Dr. Strange","Hulk","Iron Man"];
// const newData=


// **************************************************copy arra into other

// const newArr=[...arr];
// console.log(newArr);


//**************************************************concatenate or merge
// const newData=[...arr,...names];

//**************************************************add data while copying
// const newArr1=[0,...arr,6];
// console.log(newArr1);


//**************************************************spread operator in functions

// function sum(a,b,c){
// return a+b+c;
// }

// const numbers=[10,20,30];
// console.log(sum(...numbers));


// gather multiple arguments--------------rest opearyor
// function sum(...args){
//     return args.reduce((acc,val)=>acc+val,0)

// }
// console.log(sum(1,2,3,4,5));


// string into array
// const message="Hello";
// const letters=[...message];
// console.log(letters);


//deep copy for first layer
// const originalArray=[1,2,3,4,5];
// const newArray=[...originalArray];
// newArray[4]="hello";
// console.log('originalArray',originalArray);
// console.log('newArray',newArray);

//shallow copy for nested layesr
const originalArray=[1,2,3,4,{name:"Peter"}];
const newArray=[...originalArray];
newArray[4].name="Loki";
console.log('originalArray',originalArray);
console.log('newArray',newArray);




