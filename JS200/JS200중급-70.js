
// JS 200제 문자열 자르기 (substr) (중급 70)

// String 내장 객체의 substr 메소드는 인자로 시작 지점의 인덱스와 길이를 받습니다.
// 두 번째 인자인 종료 인덱스는 선택 사항이므로 필수값은 아닙니다.
// 지정된 인덱스부터 시작해서 지정된 문자수 또는 길이만큼의 새 문자열을 반환합니다.
// 따라서 추출하고자 하는 문자열의 길이를 정확히 알고 있는 경우 substr 메소드를 활용하는 것이 좋습니다.

// '문자열'.substr(시작 인덱스, 길이)

const sentence = 'Wakanda Forever!!!';
console.log(sentence.substr(8));
console.log(sentence.substr(8, 7));
console.log(sentence.substr(0));
console.log(sentence.substr(-10)); // substr 메소드는 첫 번째 인자에 음수를 넣으면 문자열의 뒤에서부터 위치를 결정합니다.
// -10 인덱스는 뒤에서부터 10번째 문자인 F를 의미합니다. 두 번째 인자가 없기 때문에 F부터 마지막까지 반환합니다.
console.log(sentence.substr(0, -3)); // 두 번째 인자에 음수를 넣으면 정상적으로 수행되지 않습니다.
console.log(sentence.substr(30)); // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환합니다.
console.log(sentence.substr(0, 30)); // 두 번째 인자가 변수의 문자열 길이보다 크다면, 문자열보다 큰 길이를 의미하며, 길이 만큼 값을 반환합니다.