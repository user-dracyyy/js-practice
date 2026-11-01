// --- 1. DATE OBJECT BASICS ---
let myDate = new Date();
console.log("Normal Date object:", myDate);
console.log("To String:", myDate.toString());
console.log("To Date String:", myDate.toDateString());
console.log("To Local String:", myDate.toLocaleString());

console.log("Type of Date:", typeof myDate); // Output: "object" (Interview favorite!)


// --- 2. CREATING SPECIFIC DATES ---
// Note: Months start from 0 in JavaScript (0 = January)
let createdDate1 = new Date(2023, 0, 23); 
console.log("Created Date (YYYY, MM, DD):", createdDate1.toDateString());

let createdDate2 = new Date("2023-01-14"); // Yahan January 1 hi hai
console.log("Created Date (String format):", createdDate2.toLocaleString());


// --- 3. TIME STAMPS (Used for polls, quizzes, and comparisons) ---
let myTimeStamp = Date.now();
console.log("Current TimeStamp (in milliseconds):", myTimeStamp);

// Convert milliseconds into seconds (Interview trick)
console.log("Time in Seconds:", Math.floor(Date.now() / 1000));


// --- 4. GETTING SPECIFIC PARTS (Month, Day, Year) ---
let newDate = new Date();
console.log("Current Year:", newDate.getFullYear());
console.log("Current Month (0-indexed):", newDate.getMonth() + 1); // +1 karke exact month milta hai
console.log("Current Day:", newDate.getDay());


// --- 5. CUSTOMIZING toLocaleString ---
// Locale ke sath object pass karke formatting control karna
console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        month: "numeric",
        day: "numeric"
    })
);