
// JS 200제 특정 위치의 문자 반환하기 (charAt) (중급 74)

// String 내장객체 메소드인 charAt()는 숫자형 인자를 받습니다. 괄호 안에 대입된 문자열에서 인덱스를 가리키고 해당 위치의 문자를 반환합니다.

const str = 'Good afternoon, Good evening, and Good night! ' + '- The Truman show, 1998';

console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.charAt(14));
console.log(str.length);
console.log(str.charAt(500)); // 빈 값 출력