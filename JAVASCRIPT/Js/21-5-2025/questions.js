// // let temp=-20;
// // if(temp>=0){
// //     if(temp>=0 && temp<=10){
// //         console.log("cold");
        
// //     }
// //     else if(temp>10 && temp<=40){
// //         console.log("moderate");
        
// //     }
// //     else{
// //         console.log("hot summer");
        
// //     }
// // }
// // else{
// //     console.log("Freezing ");
    
// // }

// for(let time=1;time<=10;time++){
//     if(time>=1 && time<=3){
//         console.log(`${time} s: Red Light-stop`);
//     }
//     else if(time>=4 && time<=6){
//          console.log(`${time} s: Yello Light-Get ready`);
//     }
//     else{
//          console.log(`${time} s: green Light-Go`);
//     }
//     }

// Advanced Electricity Bill Categorizer
// You are checking the electricity units and meter status for 5 houses.
// Each house provides:
// The number of units consumed, and
// The meter status ("OK" or "Faulty").
// Your logic should:
// Skip checking houses with faulty meters and print:"House X: Meter Fault – Data Skipped"
// If the meter is "OK", evaluate the units:
// 0 to 100 units → "House X: Low Usage"
// 101 to 300 units → "House X: Moderate Usage"
// 301 and above → further check:
// If units > 500, check if it's above 800:
// If above 800, print: "House X: Critical Usage – Inspect Immediately"
// Else print: "House X: Very High Usage"
// Else, print: "House X: High Usage"
// above with total usage and cost calulator

let totalunit=0;
let totalCost=0;

for(let house=1;house<=5;house++){
    let units=parseInt(prompt("Enter units for house")+house+":");
}
