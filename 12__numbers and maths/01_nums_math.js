// --- 1. NUMBERS AND METHODS ---
const score = 400;
const balance = new Number(100);

console.log(balance.toString().length); // Output: 3 (String banne ke baad length check ki)
console.log(balance.toFixed(2));        // Output: 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // Output: 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000


// --- 2. MATH OBJECT BASICS ---
console.log(Math);
console.log(Math.abs(-5));    // 5
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(2, 5, 9, 1)); // 1
console.log(Math.max(2, 5, 9, 1)); // 9


// --- 3. MATH.RANDOM TRICKS ---
console.log("Random (0 to 1):", Math.random());
console.log("Random (1 to 10):", Math.floor(Math.random() * 10) + 1);

// Dice roll game logic (1 to 6)
const minVal = 1;
const maxVal = 6;
const diceRoll = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
console.log("Dice Roll Result:", diceRoll);

// --- 6 TIMES DICE ROLL SIMULATION WITH CALCULATION ---
// Roll 1 -> Random: 0.15 | *6: 0.90 | Floor: 0 | Final Result: 1
// Roll 2 -> Random: 0.27 | *6: 1.62 | Floor: 1 | Final Result: 2
// Roll 3 -> Random: 0.43 | *6: 2.58 | Floor: 2 | Final Result: 3
// Roll 4 -> Random: 0.99 | *6: 5.94 | Floor: 5 | Final Result: 6
// Roll 5 -> Random: 0.82 | *6: 4.92 | Floor: 4 | Final Result: 5
// Roll 6 -> Random: 0.61 | *6: 3.66 | Floor: 3 | Final Result: 4