// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!

// // // // let js = "amazing";
// // // // console.log(40 + 8 + 23 -10);
// // // // console.log(js);

// // // // console.log("=== VARIABLES ===");
 
// // // // let firstName = "Jonas";
// // // // console.log(firstName);
 
// // // // let age = 30;
// // // // console.log(age);
// // // // age = 50;
// // // // console.log(age);
 
// // // // const birthYear = 1991;
// // // // console.log(birthYear);
 
// // // // //birthYear = 2005;
 
// // // // const PI = 3.1415;
// // // // console.log(PI);
 
// // // // var job = "programmer";
// // // // job = "teacher";
// // // // console.log(job);
 
 
// // // // const country = "Philippines";
// // // // const language = "Filipino";
// // // // const population = 10000;
 
// // // // age = 20;
// // // // age = 21;
 
// // // // console.log("=== DATA TYPES====");
 
// // // // let id = 103560;
// // // // console.log(id);
// // // // console.log(typeof id)
 
// // // // let lastName = "Gascon";
// // // // console.log(lastName)
// // // // console.log(typeof lastName)
 
// // // // let javaScriptIsFun = true;
// // // // console.log(javaScriptIsFun)
// // // // console.log(typeof javaScriptIsFun)
 
// // // // let year;
// // // // console.log(year);
// // // // console.log(typeof year);
 
// // // // let dynamicVariable = 40;
// // // // console.log(dynamicVariable, typeof dynamicVariable);
 
// // // // dynamicVariable = "I am now a String!";
// // // // console.log(dynamicVariable, typeof dynamicVariable);
 
// // // // dynamicVariable = true;
// // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // Basic Operators - Math operators\
// // // console.log("===MATH OPERATORS===");
 
// // // const now = 2037;
// // // const ageJonas = now - 1991;
// // // const ageSarah = now - 2018;
// // // console.log(ageJonas, ageSarah);
 
// // // console.log(ageJonas * 2, ageJonas / 10,2 **3);
 
// // // console.log("Math operations:");
// // // console.log("Addition:", 10 + 5);
// // // console.log("Subtraction:", 20 - 8);
// // // console.log("Multiplication:", 4 * 7);
// // // console.log("Division:", 15 / 3);
// // // console.log("Exponentiation:", 2 ** 3);
 
// // // // Math with strings!
// // // const firstName = "Jonas";
// // // const lastName = "Doe";
// // // console.log(firstName + " " + lastName);
 
// // // console.log("Hello " + "World" + "!");
 
// // // console.log("I am " + 25 + " years old");
 
// // // // Assignment operators
// // // console.log("====ASSIGNMENT OPERATORS===");
 
// // // let x = 10 + 5;
// // // console.log("x starts as:", x);
 
// // // x += 10;
// // // console.log("After x += 10:", x);
 
// // // x *= 4;
// // // console.log("After x *= 4:", x);
 
// // // x /= 2;
// // // console.log("After x /= 2:", x);
 
// // // x++;
// // // console.log("After x++:", x);
 
// // // x--;
// // // x--;
// // // console.log("After x-- twice:", x);
 
// // // // Comparison operators
// // // console.log("=== COMPARISON OPERATORS ===");
 
// // // console.log("Age comparison:");
// // // console.log(ageJonas > ageSarah);
 
// // // console.log(ageSarah >= 18);
// // // console.log(ageJonas < 30);
 
// // // console.log("Number comparisons:");
// // // console.log(25 > 20);
// // // console.log(15 < 10);
// // // console.log(18 >= 18);
// // // console.log(16 <= 15);
 
// // // const isFullAge = ageSarah >= 18;
// // // console.log("Sarah is adult:", isFullAge);
 
// // // const isJonasOlder = ageJonas > ageSarah;
// // // console.log("Jonas is older:", isJonasOlder);
 
// // // console.log("Complex comparison:");
// // // console.log(now - 1991 > now - 2018);
 
// // // let z, y;
// // // z = y = 25 - 10 - 5;
// // // console.log(z, y);
 
// // // const averageAge = (ageJonas + ageSarah) / 2;
// // // console.log(ageJonas, ageSarah, averageAge);
 
 
// // // ////////////////////////////////////
// // // // Coding Challenge #1 - BMI Calculator
 
// // // // Test Data 1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;
 
// // // // Your code here:
// // // // 1. Calculate BMIs
// // // // 2. Create markHigherBMI variable
// // // // 3. Log results to console
// // // // log Marks BMI
// // // // log john BMI
// // // // log markHigherBMI
 
// // // const markBMI = massMark / heightMark ** 2;
// // // console.log("BMI of Mark: ", markBMI);
 
// // // const johnBMI = massJohn / (heightJohn * heightJohn);
// // // console.log("BMI of John: ", johnBMI);
 
// // // const markHigherBMI = markBMI > johnBMI;
// // // console.log("Is the BMI of Mark is higher than John: ", markHigherBMI);

// // // Strings and Template Literals
// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;
 
// // const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);
 
// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);
 
// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3} equals five`);
// // console.log(`Comparisons too: ${5 > 3}`);
 
// // console.log(`Just a regular string...`);
 
// // // if / else Statements
// // const age = 15;
 
// // if (age >= 18) {
// //   console.log(`Sarah can start a driving license 🚗`);
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }
 
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean("Jonas"));
// // console.log(Boolean({}));
// // console.log(Boolean(""));
 
// // // Coding Challenge #2
 
// // // Reuse your BMI calculation from Challenge #1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
 
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);
 
// // // Your if/else statement here:
// // if (BMIMark > BMIJohn) {
// //     console.log(`Mark's BMI is higher than John's!`);
// // } else {
// //     console.log(`John's BMI is higher than Mark's!`);
// // }
 
// // // Compare BMIs and create intelligent messages
 
 
// // // Use template literals for beautiful output
// // // const firstName = `Mark`;
// // // const BMI = BMIMark;
// // // const BMIMarkNew = `I'm ${firstName}, my BMI is ${BMIMark}!`;
// // // console.log(BMIMarkNew);

// // Type Conversion and Coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Automatic Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1; // "11"
// console.log(n);

// n  = n - 1;
// console.log(n);


// // Equality - Strict
// const age = 18;
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18);
// console.log(18 === 18);

// // Why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("   " == 0);

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite == 23) {
//   console.log("23 string is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favorite !== 23) console.log("Why not 23?");


// // Test these comparisons - predict first, then run:
// // console.log(5 === "5"); // Your guess: ?
// // console.log(5 == "5"); // Your guess: ?
// // console.log(true === 1); // Your guess: ?
// // console.log(true == 1); // Your guess: ?
// // console.log(false === 0); // Your guess: ?
// // console.log(false == 0); // Your guess: ?

// Logical Operators

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(`AND OPERATORS: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATORS: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATORS: ${!hasDriversLicense}`);

// const isTired = false;

// console.log(`AND OPERATORS: ${hasDriversLicense && hasGoodVision && !isTired}`);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Shalom is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

// // More complex scenarios
// const age = 20;
// const hasPermission = false;
// const hasExperience = true;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// console.log ( ['Age 20, permission true, experience false:', true]
//     ["Age 20, permission true, experience false:", 
//         (age >= 18 || hasPermission) && hasExperience]
// );

//"Create a club system:
// 1. Create variables: age (number), hasID (boolean), isVIP (boolean)
// const age = 19;
// const hasID = false;
// const isVIP = false;
// // 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Entry granted");
// } else {
//   console.log("Entry denied");
// };
// // 3. Test with different combinations:
// //  - Age 25, hasID true, isVIP false (should enter)
// //  - Age 19, hasID true, isVIP true (should enter)
// //  - Age 19, hasID false, isVIP false (should not enter)
// // 4. Use if/else to log appropriate messages
// if ((age >= 21 && hasID) || isVIP) {
//     console.log(`Age: ${age}, hasID: ${hasID}, isVIP: ${isVIP} => Entry granted`);
//   } else {
//     console.log(`Age: ${age}, hasID: ${hasID}, isVIP: ${isVIP} => Entry denied`);
// }

////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 30;

// // basic ternary: condition ? valueifTrue : valueIfFalse
// const drink = age >= 18 ? "Wine" : "Water";
// console.log(drink);

// // if else statement
// let drink2;
// if (age >= 18) {
//   drink2 = "Wine";
// } else {
//   drink2 = "Water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);


////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"