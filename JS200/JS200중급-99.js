
// JS 200제 배열 내 값을 누적시키기(reduce) (중급 99)

// Array 객체의 메소드 reduce 는 배열 요소를 순환하면서, 정의된 callback 함수에 의해 단일 값으로 누적시킬 수 있습니다.

// reduce 메소드의 형태는 인자로 callback 함수와 초기값을 받습니다. 첫 번째 callback 함수는 기존 다른 메소드와 달리 여러 매개변수를 정의합니다.
// 아래와 같이 최대 4개까지 매개변수를 받고, 첫 번째 누적된 값과 현재 요소 값은 필수입니다.
// reduce 메소드가 처음에 실행할 때, 누적 된 값은 두 번째 인자(초기값)을 할당받습니다. 이후에는 배열 순환이 끝날 때까지 callback 함수에서 반환된 값으로 재할당됩니다.

/*
배열.reduce( 누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
  return 누적값으로 반환되는 값
}, 초기값);
*/

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
  return acc + el
}, 010);

console.log(result);

