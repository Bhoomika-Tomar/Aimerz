function withdrawNotes(amount) {
  if (amount < 100 || amount % 100 !== 0) {
    return "Invalid amount. Please enter multiples of ₹100 only.";
  }

  let count = 0;
  while (amount >= 100) {
    amount -= 100;
    count++;
  }

  return `You will receive ${count} ₹100 notes.`;
}

// Example usage:
console.log(withdrawNotes(500));  // Output: You will receive 5 ₹100 notes.
console.log(withdrawNotes(250));  // Output: Invalid amount...
console.log(withdrawNotes(1200)); // Output: You will receive 12 ₹100 notes.

//ashutosh function
function withdraw(amount){
    if(amount<100 || amount%100!=0){
        console.log("error");
    }
    else{
        
        console.log(amount /100)
    }
}
withdraw(200)