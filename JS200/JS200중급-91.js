
// JS 200제 배열 순환하기 (forEach) (중급 91)

// Array 내장 객체의 forEach 메소드는 배열 내부 요소를 순환하며, 각 요소에 대해 callback 함수를 실행합니다.
// 배열.forEach(callback 함수)

// forEach는 map 함수와 비슷하지만 배열을 순환하기만 할 뿐 리턴 값을 받지 않기 때문에 반환 값이없다.


const arr = [
  {id: 0, name : '혜림', age : 6},
  {id: 1, name : '현일', age : 3},
  {id: 2, name : '현아', age : 5},
  {id: 3, name : '우림', age : 2} 
];

arr.forEach((el) => {
  console.log(el.name);
})