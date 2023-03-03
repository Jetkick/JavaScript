
// JS 200제 배열 요소를 분할/변환하기 (from) (중급 79)

// Array 내장 객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할합니다. 그리고 분할된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환합니다.
// 첫 번째 인자는 배열요소로 분할 변환될 문자열을 대입합니다. 두 번째 인자는 필수값은 아니지만, callback함수를 대입하면 분할함과 동시에 각 값을 변환시킬 수 있습니다.

// Array.from(배열로 변환될 값, 변환될 배열 내부 요소에 대한 callback 함수)

const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);
