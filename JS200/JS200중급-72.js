
// JS 200제 문자열로 변환하기 (toString) (중급 72)

const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj = { a : 15}; // 자바스크립트의 모든 객체는 Object를 상속받는다.
// 그래서 다른 모든 객체는 prototype을 통해 Object의 내장 메소드 toString()에 접근하고 재정의(Override)합니다.

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString()); // 객체 값에 Object 메소드를 사용했기 때문에 [object object] 반환.
// 객체를 재정의 하지 않았기 때문에 [object type] 을 반환 

num.__proto__.toString = () => {
  return 'toString : 덮어쓰기';
};
console.log(num.toString());