let score = "33"; // Abhi yeh String hai (quotes mein hai)

// String ko Number mein convert kar rahe hain
let ValueInNumber = Number(score);

console.log(typeof ValueInNumber);
console.log(ValueInNumber);

//⚠️ Special Cases
let a = "33abc"
let NumOfa = Number(a);
console.log(NumOfa);
console.log(typeof NumOfa);

let b = null
let NumOfb = Number(b);
console.log(NumOfb);
console.log(typeof NumOfb);

let c = undefined
let NumOfc = Number(c);
console.log(NumOfc);
console.log(typeof NumOfc);

let d = true
let NumOfd = Number(d);
console.log(NumOfd);
console.log(typeof NumOfd);

let e = false
let NumOfe = Number(e);
console.log(NumOfe);
console.log(typeof NumOfe);


//Boolean conversion
let isLoggedIn1 = 0;
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)
console.log(typeof booleanIsLoggedIn1)

let isLoggedIn2 = 1;
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)
console.log(typeof booleanIsLoggedIn2)

let isLoggedIn3 = "";
let booleanIsLoggedI3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedI3)
console.log(typeof booleanIsLoggedI3)

//String conversion 
let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);        // Output: "33" (Dekhne mein 33 lagega)
console.log(typeof stringNumber); // Output: string (Sacchai mein string ban chuka hai)