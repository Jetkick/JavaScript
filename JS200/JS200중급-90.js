
// 배열의 특정 요소 위치 확인하기 (indexOf) (중급 90)

// Array 객체의 메소드 indexOf는 대입된 값(첫 번째 인자)을 배열 내부에서 검색합니다. 값이 일치하는 경우 해당 인덱스를 반환합니다.
// 두 번째 인자인 시작 인덱스는 필수값은 아닙니다. 만일 두 번재 인자에 숫자형 값을 넣으면, indexOf는 해당 인덱스부터 값을 찾습니다.
// 만일 찾는 값이 없으면 indexOf는 숫자 -1을 반환합니다.

const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter, 4')}`);
