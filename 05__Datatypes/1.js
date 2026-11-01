// Datatypes{Primitive & Non-primitive}

// --- 1. VARIABLES (`const` aur `let`) ---
const collegeName = "Delhi University"; // const: Iski value change nahi ho sakti
let studentAge = 19;                   // let: Iski value aage change ho sakti hai

// studentAge ko update kar rahe hain (Re-assignment)
studentAge = 20; // ✅ Allowed with 'let'


// --- 2. PRIMITIVE DATATYPES ---
let fullName = "Dracyyy";   // 1. String (Text data)
let totalScore = 95.5;           // 2. Number (Integer ya decimal)
let isPassed = true;             // 3. Boolean (True ya False)
let userCity;                    // 4. Undefined (Value abhi assign nahi ki gayi)
let bankBalance = null;          // 5. Null (Intentional empty/khali value)


// --- 3. NON-PRIMITIVE DATATYPES ---

// A. Array (Items ki list store karne ke liye)
let favoriteHobbies = ["Coding", "Gaming", "Reading"];

// B. Object (Key-value pairs ke form mein complex data store karne ke liye)
let studentProfile = {
  name: "Mayank",
  age: 17,
  course: "JavaScript",
  isActive: true
};


// --- 4. PRINTING VALUES IN CONSOLE ---
console.log("College:", collegeName);
console.log("Student Name:", fullName);
console.log("Current Age:", studentAge);
console.log("Hobbies List:", favoriteHobbies);
console.log("Student Object Details:", studentProfile);