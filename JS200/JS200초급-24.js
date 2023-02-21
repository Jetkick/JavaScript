
// JS 200제 삼항 연산자 (초급 24)

// 삼항 연산자는 if와 switch처럼 -조건문-을 처리하는 연산자입니다. 일반적으로 if 조건문의 축약형으로 사용되며, 세 개의 문장으로 구성됩니다.

// 삼항 연산자 = 조건문 ? 표현문1 : 표현문2

// 조건문은 반드시 결과가 참과 거짓으로 반환되어야 합니다. 그리고 그 결과가 참이면 표현문1을 실행하고, 거짓이면 표현문2를 실행합니다.

let condition = 5 > 10;

condition ? console.log('Left') : console.log('Right');

let result = condition ? (
  console.log("삼항 연산식의 첫 번째 표현식 입니다."),
  "표현식1"
) : (
  console.log("삼항 연산식의 두 번째 표현식 입니다."),
  "표현식2" // result에 값 할당
);
console.log(result);

// ex 1