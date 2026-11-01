// --- 1. STACK MEMORY PROOF (Primitive Type -> Copy milti hai) ---
let myYoutubeName = "hiteshchoudhrydotcom";
let anotherName = myYoutubeName; // Isko copy mili hai, original ka reference nahi

anotherName = "chaiaurcode";

console.log("--- STACK MEMORY RESULT ---");
console.log("Original (myYoutubeName):", myYoutubeName); // Output: hiteshchoudhrydotcom (Yeh change nahi hua!)
console.log("Copy (anotherName):", anotherName);       // Output: chaiaurcode


// --- 2. HEAP MEMORY PROOF (Non-Primitive Type -> Original ka reference milta hai) ---
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // Yeh heap memory ka direct reference share karta hai

console.log("\n--- HEAP: CHANGE SE PEHLE ---");
console.log("userOne email:", userOne.email); // user@google.com
console.log("userTwo email:", userTwo.email); // user@google.com

// Ab hum sirf 'userTwo' ki email change kar rahe hain
userTwo.email = "hitesh@google.com";

console.log("\n--- HEAP: CHANGE KE BAAD (PROOF) ---");
console.log("userOne email:", userOne.email); // Output: hitesh@google.com (Dekho! Original bhi badal gaya!)
console.log("userTwo email:", userTwo.email); // Output: hitesh@google.com