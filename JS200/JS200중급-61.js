
// JS 200제 자료형 확인하기 (typeof, instacneof) (중급 61)

const str = 'JavaScript';
const strObj =  new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

// console.log(typeof str === 'string'); // true
// console.log(typeof strObj === 'object'); // true
// console.log(typeof num === 'number'); // true
// console.log(typeof numObj === 'object'); // true
// console.log(typeof bool === 'boolean'); // true
// console.log(typeof boolObj === 'object'); // true
// console.log(typeof func === 'function'); // true
// console.log(typeof arr === 'object'); // true!
// console.log(typeof obj === 'object'); // true
// console.log(typeof empty === 'object'); // true
// console.log(typeof notCalled === 'undefined'); // true

console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(func instanceof Function);
console.log(empty instanceof Object);
console.log(notCalled instanceof undefined);
