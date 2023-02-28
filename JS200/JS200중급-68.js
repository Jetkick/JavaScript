
// JS 200제 문자열 자르기 (slice) (중급 68)

// String 내장 객체의 slice 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받습니다.
// 두 번째 인자인 종료 인덱스는 선택 사항이므로 필수값은 아닙니다.
//지정한 범위의 인덱스 문자열을 반환하되, 기존 문자열에 영향을 미치지 않습니다.

// '문자열'.slice(시작 인덱스, 종료 인덱스)

const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13)); // 변수 sentence의 13번째 인덱스부터 마지막까지의 문자열을 반환합니다.
console.log(sentence.slice(13, 24)); // 
console.log(sentence.slice(0));
console.log(sentence.slice(0, -23)); // 음수는 인덱스를 문자열의 뒤에서부터 시작하여 인덱스를 셈합니다.
console.log(sentence.slice(50)); // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환합니다.
console.log(sentence.slice(7, 2)); // 첫 번째 인자가 두 번째 인자보다 크면 slice, substring 함수는 정상적으로 수행되지 않습니다.

