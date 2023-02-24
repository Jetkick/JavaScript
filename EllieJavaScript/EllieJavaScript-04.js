
// Function
// fundamental buliding block in the program
// 기본적인 빌딩 블록 프로그램
// subprogram can be used multiple times // 서브 프로그램, 여러번 재 사용이 가능함
// performs a task or calculates a values // 하나의 태스크나 값을 계산하기 위해서 사용함

// Function declaration
// 함수 선언 : function name(param1, param2) {body... return}
// one function === one thing => 하나의 함수는 하나의 일만 하도록 해야함
// naming : doSomething, command, verb => 함수 명칭은 커맨드 및 동사 형태 등으로 만들어야 한다.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS => JS에서 함수는 객체이다.


// 2. Parameters
// premitive parametres : passed by value
// object parameters : passed by reference

function changName(obj) {
  obj.name = 'coder';
}
const ellie = { name : 'ellie'};
changName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) => ...배열 형태로 전달받게 됨
function printAll(...args) {
  for(let i=0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll('drem', 'coding', 'sina');

// 5. Local scope
let globalMessage = 'global'; // global variable

function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  
  function printAnother() {
    console.log(message)
    let childMessage = 'hello';
  }
  // console.log(childMessage) = Error
}
printMessage();

// 6. Return a value

// 7. Early return, early exit

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passwed as an argument to other function.
// can be returned by another function

// 1. function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () { // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!')
  print (); // 함수 안에서 함수 자신 스스로를 부르는 것을 '' 이라 하며 피보나치 수를 계산하거나 반복되는 평균 값을 구할 때 등 다양한 쓰임새가 있다. => 반복 호출
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous => 항상 이름이 없는 (anonymous functioan)

const a = () => console.log('AI')
const add = (a, b) => a + b;

const b = () => {
  // do something more
  
}

// IIFE : Immediately Invoked Function Expression

// src = "https://docs.google.com/spreadsheets/d/1QHg3W3w2MEt3VAPqeq7jderm0Ni8oh5hxRrM_sRk-BE/edit?usp=sharing"