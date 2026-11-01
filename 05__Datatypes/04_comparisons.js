// --- 1. BASIC COMPARISONS ---
console.log("2 > 1:", 2 > 1);   // true
console.log("2 >= 1:", 2 >= 1); // true
console.log("2 > 2:", 2 > 2); //false
console.log("2 < 1:", 2 < 1);   // false
console.log("2 == 1:", 2 == 1); // false
console.log("2 != 1:", 2 != 1); // true


// --- 2. DIFFERENT DATATYPES COMPARISON (Avoid these in production) ---
// JavaScript automatically converts string to number during comparison
console.log("\"2\" > 1:", "2" > 1);   // true   "2" into 2
console.log("\"02\" > 1:", "02" > 1); // true   "02" into 02 means 2


// --- 3. NULL COMPARISONS (Confusing Behavior) ---
// Comparisons (>, <, >=, <=) convert null to a number (0), whereas equality (==) does not.
console.log("null > 0:", null > 0);   // false
console.log("null == 0:", null == 0); // false
console.log("null >= 0:", null >= 0); // true (null is converted to 0 here)


// --- 4. UNDEFINED COMPARISONS ---
// Undefined always returns false for comparisons and equality checks
console.log("undefined == 0:", undefined == 0); // false
console.log("undefined > 0:", undefined > 0);   // false
console.log("undefined < 0:", undefined < 0);   // false
console.log("undefined >= 0:", undefined >= 0) //false


// --- 5. STRICT CHECK (=== vs ==) ---
// Normal equality (==) allows type conversion, but strict check (===) checks both value AND datatype.
console.log("\"2\" == 2:", "2" == 2);   // true (value same hai, type convert ho gaya)
console.log("\"2\" === 2:", "2" === 2); // false (strict check: ek string hai aur ek number)