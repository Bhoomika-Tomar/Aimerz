// console.log([] + []);           // empty
// console.log([] + {});           // [object object]
// console.log({} + []);           // [obj. obj.]
// console.log(+[]+8);           //   8
// console.log(false == '0');      // true
// console.log(null == undefined); // true



// let a=+[]+8;              
// console.log(a+10);        //18

// console.log(typeof(a));    //number


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);       //3  3  3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);        //0  1  2
}
