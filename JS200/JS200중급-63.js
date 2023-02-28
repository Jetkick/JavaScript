
// JS 200제 정수 확인하기(isinteger) (중급 63)

// Number 내장 객체의 isInteger() 메소드는 값이 정수인지 아닌지 확인하는 메소드입니다.
// 수학적으로 정의된 정수에 대해서는 모두 true를 반환하고, 정수가 아닌 값은 flase를 반환합니다.

// console.log(Number.isInteger(0));
// console.log(Number.isInteger(-1));
// console.log(Number.isInteger(7777777777777777777777));
// console.log(Number.isInteger(null));
// console.log(Number.isInteger(0/0));
// console.log(Number.isInteger('Infinity'));
// console.log(Number.isInteger(true));
// console.log(Number.isInteger({}));

function verifyInteger(n) {
  if (!Number.isInteger(n)) return 0;
  return n
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity); // Integer의 byte 크기를 뛰어넘는 큰 수 이므로 0을 반환합니다.
const num3 = verifyInteger(0.05); // 실수형 값이기 때문에 결과값 0을 반환합니다.

console.log(num1, num2, num3);