'use strict';

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;


// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function (a,b) {
//     return a + b;
// }

// const addArrrow = (a, b) => a + b;

// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, I am ${this.name}`);
//     },
// };

// person.greet();

// // Method borrowing
// const anotherPerson = { name: 'Sarah'};
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // Detached function call
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//     name: 'Object',

//     regularMethod: function () {
//         console.log('Regular:', this.name);
//     },

//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start(); 
// timer.startModern();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
functionTypes.arrowFunction('modern', 'approach');
