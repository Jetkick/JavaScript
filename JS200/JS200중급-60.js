
// JS 200제 표준 내장 객체 이해하기 (중급 60)

// 표준 내장 객체(Standard Built-in Objects 또는 Global Objects)는 전역 스코프(scope) 안에 있는 객체 들을 참조하고 있어,
// 자바스크립트를 실행할 때 어떤 환경(브라우저, 서버)이라도 전역에서 사용가능합니다.

// 표준 내장 객체는 객체임에도 함수처럼 호출할 수 있는 객체가 있습니다.
//매개변수를 받고, 함수 몸통(중괄호 안의 코드 다발)에 내장 함수 객체의 행위를 특징화 하는 코드들이 구현되어 있습니다.
// 이러한 형태를 내장 함수 객체(Built-in Function Object)라고 합니다.
// new 지시자를 사용하여 함수 형태로 호출하며, 생성자(Constructor)를 생성합니다.
// 또한 표준 내장 객체에서 사용할 수 있는 속성과 메소드가 정의되어 있습니다.

const str = new String('자바스크립트')
const num = new Number(200)
const bool = new Boolean(true)
const date = new Date();
const map = new Map();
const set = new Set();

const str1 = '자바스크립트 200제'; // String
const str2 = new String('자바스크립트 200제'); // Object

console.log(str1 === '자바스크립트 200제')
console.log(str2 === new String('자바스크립트 200제'));

console.log(str1.valueOf());
console.log(str2.valueOf());