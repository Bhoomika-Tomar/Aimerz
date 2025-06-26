// const obj={
//     name:"Peter Dinklage",
//     uid:90,
//     position:"Hand of the queen"
// }

// const arrObjHarryPotter=[
//     {name:"Harry Potter",uid:48,houseName:"Griffindor"},
//     {name:"Ron Weasely",uid:38,houseName:"Griffindor"},
//     {name:"Hermioni Grenger",uid:28,houseName:"Griffindor"},
//     {name:"Draco Malfoy",uid:79,houseName:"Slytherine"},
//     {name:"Neville Longbottom",uid:79,houseName:"Hufflepuff"},
//     {name:"Luna Lovegood",uid:79,houseName:"Ravenclaw"},
// ];
// // console.log(arrObjHarryPotter[5].houseName);

// // console.log(arrObjHarryPotter.name);

// // for(let i=0;i<arrObjHarryPotter.length;i++){
// //     console.log(arrObjHarryPotter[i].name);
    
// // }

// // const arr=[12,23,34,45,56,67,78,89,90];
// // arr.map((num)=>{
// //     console.log(num);
    
// // })



// //forEach
// const arr=[12,23,34,45,56,67,78,89,90];
// // arr.map((num)=>{
// //     console.log(num);
    
// // })

// // arr.forEach((num)=>{
// //     console.log(num);
    
// // })



// // const arrMap=arr.map((num)=>{
// //     return num;
    
// // })
// // console.log(arrMap);


// // const arrforEach=arr.forEach((num)=>{
// //     return num; 
// // })
// // console.log(arrforEach);

// //filter, reduce, some, few, sort

// const arrData=[
//     {name:"Peter Parker", marks:99,uid:48},
//     {name:"Thor Odinson", marks:100,uid:76},
//     {name:"Loki Odinson", marks:67,uid:89},
// ]


// const newData=arrData.filter((data)=>{
//     return data.marks>95;
// })
// console.log(newData);


 const students = [
  // Section A
  {
    uid: "A01",
    name: "Aarav Mehta",
    class: "10-A",
    section: "A",
    age: 15,
    gender: "Male",
    rank: 1,
    marks: 95.6
  },
  {
    uid: "A02",
    name: "Diya Sharma",
    class: "10-A",
    section: "A",
    age: 14,
    gender: "Female",
    rank: 2,
    marks: 93.2
  },
  {
    uid: "A03",
    name: "Kunal Singh",
    class: "10-A",
    section: "A",
    age: 15,
    gender: "Male",
    rank: 3,
    marks: 91.5
  },
  {
    uid: "A04",
    name: "Priya Verma",
    class: "10-A",
    section: "A",
    age: 14,
    gender: "Female",
    rank: 4,
    marks: 89.8
  },
  {
    uid: "A05",
    name: "Rahul Kapoor",
    class: "10-A",
    section: "A",
    age: 15,
    gender: "Male",
    rank: 5,
    marks: 87.4
  },

  // Section B
  {
    uid: "B01",
    name: "Ishita Desai",
    class: "10-B",
    section: "B",
    age: 14,
    gender: "Female",
    rank: 1,
    marks: 92.3
  },
  {
    uid: "B02",
    name: "Ayaan Khan",
    class: "10-B",
    section: "B",
    age: 14,
    gender: "Male",
    rank: 2,
    marks: 90.1
  },
  {
    uid: "B03",
    name: "Meera Joshi",
    class: "10-B",
    section: "B",
    age: 13,
    gender: "Female",
    rank: 3,
    marks: 88.4
  },
  {
    uid: "B04",
    name: "Siddharth Rao",
    class: "10-B",
    section: "B",
    age: 13,
    gender: "Male",
    rank: 4,
    marks: 85.9
  },
  {
    uid: "B05",
    name: "Ananya Iyer",
    class: "10-B",
    section: "B",
    age: 13,
    gender: "Female",
    rank: 5,
    marks: 83.5
  },

  // Section C
  {
    uid: "C01",
    name: "Tanishq Reddy",
    class: "10-C",
    section: "C",
    age: 12,
    gender: "Male",
    rank: 1,
    marks: 91.0
  },
  {
    uid: "C02",
    name: "Neha Bansal",
    class: "10-C",
    section: "C",
    age: 12,
    gender: "Female",
    rank: 2,
    marks: 89.2
  },
  {
    uid: "C03",
    name: "Rohit Malhotra",
    class: "10-C",
    section: "C",
    age: 11,
    gender: "Male",
    rank: 3,
    marks: 87.5
  },
  {
    uid: "C04",
    name: "Sanya Gupta",
    class: "10-C",
    section: "C",
    age: 11,
    gender: "Female",
    rank: 4,
    marks: 85.1
  },
  {
    uid: "C05",
    name: "Manan Thakur",
    class: "10-C",
    section: "C",
    age: 10,
    gender: "Male",
    rank: 5,
    marks: 83.0
  },

  // Section D
  {
    uid: "D01",
    name: "Jiya Kapoor",
    class: "10-D",
    section: "D",
    age: 10,
    gender: "Female",
    rank: 1,
    marks: 90.4
  },
  {
    uid: "D02",
    name: "Zayan Sheikh",
    class: "10-D",
    section: "D",
    age: 9,
    gender: "Male",
    rank: 2,
    marks: 88.6
  },
  {
    uid: "D03",
    name: "Naira Choudhary",
    class: "10-D",
    section: "D",
    age: 9,
    gender: "Female",
    rank: 3,
    marks: 86.8
  },
  {
    uid: "D04",
    name: "Reyansh Yadav",
    class: "10-D",
    section: "D",
    age: 8,
    gender: "Male",
    rank: 4,
    marks: 85.0
  },
  {
    uid: "D05",
    name: "Avni Nair",
    class: "10-D",
    section: "D",
    age: 8,
    gender: "Female",
    rank: 5,
    marks: 82.7
  },

  // Section E
  {
    uid: "E01",
    name: "Yash Rathi",
    class: "10-E",
    section: "E",
    age: 15,
    gender: "Male",
    rank: 1,
    marks: 93.9
  },
  {
    uid: "E02",
    name: "Simran Dey",
    class: "10-E",
    section: "E",
    age: 14,
    gender: "Female",
    rank: 2,
    marks: 91.2
  },
  {
    uid: "E03",
    name: "Ritika Sen",
    class: "10-E",
    section: "E",
    age: 14,
    gender: "Female",
    rank: 3,
    marks: 89.0
  },
  {
    uid: "E04",
    name: "Harsh Vardhan",
    class: "10-E",
    section: "E",
    age: 15,
    gender: "Male",
    rank: 4,
    marks: 86.6
  },
  {
    uid: "E05",
    name: "Preeti Yadav",
    class: "10-E",
    section: "E",
    age: 15,
    gender: "Female",
    rank: 5,
    marks: 84.2
  }
];

const topRankers=students.filter(student=>{
    return student.rank<=3;
})
// console.log(topRankers);

const details=topRankers.map((data)=>{
    return {name:data.name,section:data.section,rank:data.rank};
})
console.log(details);



