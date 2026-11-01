// --- 1. STRING DECLARATION & MODERN INTERPOLATION ---
const name = "mayank";
const repoCount = 5;

// Purana tarika (Avoid this)
// console.log("Hello my name is " + name + " and repo count is " + repoCount);

// Modern tarika: String Interpolation using Backticks (``)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// --- 2. OBJECT DECLARATION & LENGTH ---
const gameName = new String('hitesh-hc');
console.log("Length of string:", gameName.length); // Output: 9
console.log(`Length of string: ${gameName.length}`)


// --- 3. COMMON STRING METHODS ---
console.log("To Uppercase:", gameName.toUpperCase());
console.log("Character at index 2:", gameName.charAt(2));     // Output: t
console.log("Index of character 't':", gameName.indexOf('t')); // Output: 2

// Substring (Negative values are ignored here)
const newString = gameName.substring(0, 4);
console.log("Substring:", newString); // Output: hite

// Slice (Supports negative values from the end)
const anotherString = gameName.slice(-8, 4);
console.log("Slice string:", anotherString);


// --- 4. TRIM, REPLACE, INCLUDES, AND SPLIT ---
// Trim (Removes extra spaces)
const stringWithSpaces = "   hitesh   ";
console.log("Before trim:", stringWithSpaces);
console.log("After trim:", stringWithSpaces.trim()); // Output: "hitesh"

// Replace
const url = "https://hitesh.com/hitesh%20choudhary";
console.log("Replaced URL:", url.replace('%20', '-'));

// Includes (Check if keyword exists)
console.log("Includes 'hitesh':", url.includes('hitesh')); // Output: true

// Split (Converts string into an array based on separator)
const splitDemo = "hitesh-hc-com";
console.log("Split result:", splitDemo.split('-')); // Output: [ 'hitesh', 'hc', 'com' ]