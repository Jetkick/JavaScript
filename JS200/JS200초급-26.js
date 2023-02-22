
// JS 200제 자료형 변환 이해하기 (초급 26)



console.log("5" + 1); // String
console.log("5" - 1); // nums
console.log("5" * 2); // nums
console.log("There is " + 5); // String
console.log("Five" * 2); // NaN

console.log('- 연산자를 활용한 자료형 변환');
let str = 5 + "1";
console.log(str);
console.log(typeof str); // String

let num = +str;
console.log(num); // nums 51
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환');
str = String(num); // 내장 객체 활용
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);