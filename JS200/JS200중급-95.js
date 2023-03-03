
// JS 200제 모든 배열 요소가 특정 조건을 만족하는지 확인하기(every) (중급 95)

// Array 객체의 every 메소드는 배열의 모든 요소가 callback 함수 조건을 만족하는지 확인합니다.
// 따라서 callback 함수 조건이 한번이라도 false 인 경우, false 반환과 함께 실행이 종료됩니다.
// 모든 조건 결과가 true일 때에만 every 메소드는 true 를 반환합니다.

const arr = [
  {id : 0, name : '혜림', age : 6},
  {id : 1, name : '현일', age : 3},
  {id : 2, name : '현아', age : 5},
  {id : 3, name : '우림', age : 2}
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);