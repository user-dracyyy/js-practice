// --- 1. PRIMITIVE DATATYPES (7 types: Call by Value) ---
const st = "it is string"       // String
const score = 100;              // Number
const scoreValue = 100.3;       // Number (Float nahi hota, sab Number hi hai)
const isLoggedIn = false;       // Boolean
const Null = null;       // Null (Empty)
let A_undefined;                  // Undefined
const bigNumber = 3456789023456789n; // BigInt (last mein 'n' lagane se BigInt ban jata hai)
const id = Symbol('123');

const anotherId = Symbol('123');
console.log("Symbols are equal:", id === anotherId); // false (kyunki symbol unique banata hai)



// --- 2. NON-PRIMITIVE / REFERENCE DATATYPES ---
// A. Array
const heroes = ["shaktiman", "naagraj", "doga"];

// B. Object
let myObj = {
    name: "hitesh",
    age: 22,
}

// C. Function
const myFunction = function() {
    console.log("Hello world");
}


// --- 3. TYPEOF OPERATOR (Checking Datatypes) ---
console.log("Type of null:", typeof Null);     // "object" (Interview favorite!)
console.log("Type of undefined:", typeof A_undefined); // "undefined"
console.log("Type of function:", typeof myFunction); // "function"
console.log("Type of heroes (Array):", typeof heroes); // "object"