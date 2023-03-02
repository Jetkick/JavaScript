
// JS 200제 배열 요소 일괄 변경하기 (map) (중급 98)

// 배열의 요소를 일괄 변경해야 하는 경우, Array 객체의 map 메소드를 활용합니다. callback 함수를 인자로 받아,
// callback 함수의 return으로 반환되는 값들을 재조합하여 새로운 배열에 만듭니다.

const arr = [
  {id : 0, name : '혜림', age : 6},
  {id : 1, name : 'sina', age : 3},
  {id : 2, name : '현아', age : 5},
  {id : 3, name : '우림', age : 2}
];

const arr2 = arr.map(el => { // 속성만 변경하여 다시 객체를 반환했기 때문에, arr2 변수에는 객체 요소로 구성된 배열이 할당됩니다.
  el.age = el.age + 1;
  return el
});

const arr3 = arr.map(el => el.name); // 전달된 요소의 name 속성만 반환을 하였고, arr3 변수에는 문자열로 구성된 새로운 배열이 할당됩니다.

console.log(arr2);
console.log(arr3);