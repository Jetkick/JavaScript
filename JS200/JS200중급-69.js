
// JS 200제 문자열 자르기 (substring) (중급 69)

// String 내장 객체의 substring 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받습니다.
// 두 번째 인자인 종료 인덱스는 선택 사항이므로 필수값은 아닙니다.
// substring 메소드 실행 결과값은 새로운 문자열을 반환하며 기존 문자열을 변경하지 않습니다.

// '문자열'.substring(시작 인덱스, 종료 인덱스)

const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13));
console.log(sentence.substring(13, 20));
console.log(sentence.substring(0));
console.log(sentence.substring(0, -20)); // substring 메소드는 음수를 넣으면 정상적으로 수행하지 않습니다.
console.log(sentence.substring(50)); // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환합니다.
console.log(sentence.substring(20, 13)); // 첫 번째  인자보다 두 번째 인자가 크면 두 개의 인수를 교환하여 수행합니다.
// 따라서 sub string (13, 20)의 결과값과 동일하게 'the end' 문자열이 출력됩니다.

