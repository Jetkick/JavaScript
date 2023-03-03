
// JS 200제 배열의 특정 조건을 충족하는 요소 찾기 (find) (중급 97)

// Array 객체의 find 메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환하면서, 특정 조건을 만족하는 첫 번째 요소를 반환합니다.
// 확인하는 방식은 callback 함수 내부에 정의된 문장들을 통해 테스트하게 되는데, callback 함수의 반환값은 무조건 true 또는 false이어야 합니다.

const arr = [
  {name : '우림', age : 2},
  {name : '현아', age : 5},
  {name : '탄이', age : 3},
  {name : '현일', age : 30},
  {name : '혜림', age : 6}
]

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);