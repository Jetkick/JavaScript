
// JS 200제 비교 연산자 (초급 22)

// 비교 연산자는 두 개의 값을 비교하여 true, false 결과값을 반환합니다. 비교 연산자의 종류에는 값이 동등한지 비교하는 일치 연산자와 값의 관계를 비교하는 관계 연산자가 있습니다.

// 일치 연산자는 - 값의 일치 여부 - 를 확인하며, 종류에는 동등 연산자, 부등 연산자, 일치 연산자, 불일치 연산자가 있습니다.

// 동등, 부등, 일치, 불일치

console.log(5 == 5); // true
console.log("5" == 5); // true
console.log(5 == "5"); // true
// 비교 대상값의 자료형이 서로 다르면 강제로 형을 바꾼 뒤에 비교한다(형변환)
// 비교 값들이 객체형 일시 메모리 주소를 바라보는지 확인한다.
console.log(5 != 1); // true
console.log(5 != "1"); // true
console.log(5 != "5"); // false = 값이 서로 같아서 false.
// 부등 연산자는 값이 다른 경우 true를 반환합니다.
console.log(5 === 5); // true
console.log(5 === "5"); // false
// 일치 연산자는 엄격한 기준으로 비교하며, 자료형, 값의 내용 두 개의 요소가 일치하는지 비교합니다.
console.log(5 !== 10); // true
console.log(5 !== "5"); // true
// 불일치 연산자는 엄격한 기준으로 값의 불일치 여부를 확인합니다.

// 관계 연산자
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 <= 6); // true
console.log(5 >= 5); // true