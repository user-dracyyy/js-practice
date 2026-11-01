// --- 1. BASIC OPERATIONS & STRINGS ---
let value = 3;
let negValue = -value;
console.log("Negative Value:", negValue); // Output: -3

// String Concatenation (Do strings ko aapas mein jodna)
let str1 = "Hello";
let str2 = " Mayank";
let str3 = str1 + str2;
console.log("Joined String:", str3); // Output: Hello Mayank


// --- 2. TRICKY OPERATIONS (Confusing JS Behavior) ---

// Agar pehle number hai aur baad mein string, toh bhi concatenation ho jata hai
console.log("1 + 2 + \"2\" result:", 1 + 2 + "2"); // Output: 32 (Pehle 1+2=3 hua, phir "2" ke sath jud gaya)

// Agar shuru mein hi string aa jaye, toh sabhi numbers ko string maan liya jata hai
console.log("\"1\" + 2 + 2 result:", "1" + 2 + 2); // Output: 122

// Sahi tareeqa: Hamesha brackets () ka use karein taaki code readable rahe
console.log("Clean calculation:", (3 + 4) * 5 % 3); // Output: 2

//

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Sabhi ke andar 4 aa jayega

// --- 3. TRICKY CONVERSIONS & INCREMENT ---

// A. Boolean aur Empty value ko number banana
console.log("+true result:", +true); // Output: 1
console.log("+\"\" result:", +"");     // Output: 0

// B. Multiple Assignment (Confusing style - avoid in real projects)
let nm1, nm2, nm3;
nm1 = nm2 = nm3 = 2 + 2;
console.log("Multiple values:", nm1, nm2, nm3); // Output: 4 4 4

// C. Increment Operator (Game Counter example)
let gameCounter = 100;
gameCounter++; // Value ko 1 se badha dega
console.log("Updated Game Counter:", gameCounter); // Output: 101