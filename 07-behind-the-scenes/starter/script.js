'use strict';

console.log(varX);
// console.log(letX);
// console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;


function addDecl(a,b) {
    return a + b;
}
console.log(addDec(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

const addExpr = function (a,b) {
    return a + b;
}

const addArrrow = (a, b) => a + b;


