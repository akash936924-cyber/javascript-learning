let value = 4.7;

console.log(Math.round(value));  // 5 
console.log(Math.floor(value));  // 4 
console.log(Math.ceil(value));   // 5 

console.log(Math.min(2, 5, 1, 8)); // 1 
console.log(Math.max(2, 5, 1, 8)); // 8 

console.log(Math.random());  
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);


console.log(Math.pow(2, 3));  // 8 
console.log(Math.sqrt(64));   // 8 


console.log(Math.abs(-10));  // 10 


let dice = Math.floor(Math.random() * 6) + 1;

console.log(`Dice rolled: ${dice}`);


let otp = Math.floor(1000 + Math.random() * 9000);

console.log(`Your OTP is: ${otp}`);



let price = 1000;
let discount = 20;

let finalPrice = price - (price * discount / 100);

console.log(`Final Price: ${finalPrice}`);
