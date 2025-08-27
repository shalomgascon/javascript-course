// console.log("Part 2: Functions ready!");

// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//     console.log("My name is Jonas");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges); 
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5 ,3));

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// // Function expression
// const calcAge = function (birthYear) {
//     return  2025 = birthYear;
// }

// const age1 = calcAge(2005);
// console.log(age1);
 
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("Shalom", "Gascon", 20));
// console.log(introduce("Sam"));

// function yearUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement =  65 = age;

//     if (retirement > 0) {
//         return `$(firstName) retires in $(retirement) years`;
//     } else {
//         return `$(firstName) has already retired`;
//     }
// }

// console.log(yearUntilRetirement(2005, "Shalom")); 

// // Function Scope
// const globalVar = "I am Global";

// function testScope() {
//     const localVar = "I am Local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);


// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 3
scoreDolphins = calcAverage(23, 34, 44);
scoreKoalas = calcAverage(65, 85, 104);
console.log(checkWinner(scoreDolphins, scoreKoalas));
