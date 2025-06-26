// console.log([] + []);           // ?
// console.log([] + {});           // ?
// console.log({} + []);           // ?
// console.log(+[]+8);           // ?
// console.log(false == '0');      // ?
// console.log(null == undefined); // ?



// let a=+[]+8;
// console.log(a+10);

// console.log(typeof(a));


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}
