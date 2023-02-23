
// JS 200제 NaN 값 확인하기 (중급 62)

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('Is it Number?'));
// console.log(Number.isNaN(0));
// console.log(Number.isNaN(null));

// console.log(Number.isNaN(-1)) // 음수. 숫자형. false
// console.log(Number.isNaN(0/0)) // true
// console.log(Number.isNaN(new Date()))
// console.log(Number.isNaN(new Date().toString))
// console.log(Number.isNaN('Infinity')) // 숫자형 이므로 false

function verifyNumber(n) {
  if (Number.isNaN(n) || !n) return 0; // true면 0을 반환 false면 그대로 값 반환. 빈 값과 NaN이면 true를 반환하는 조건문... Number.isNaN()
  return n
};
const num1 = verifyNumber(15);
const num2 = verifyNumber(undefined);
const num3 = verifyNumber(null);
const num4 = verifyNumber(NaN);
console.log(num1 + num2 + num3 + num4);
