
// JS 200제 두 개의 문자열 하나로 합치기 (concat) (중급 73)

// String 내장 객체 메소드인 concat은 문자열을 합치는 역할을 합니다.

const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good nigth!';
const str4 = ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));

// + 연산자를 활용하여 문자열을 합칠 수 있습니다. concat보다 + 연산자를 더 많이 사용하며,
// 다른 자료형(숫자)과 문자를 하나의 문자열로 만드는 경우가 일반적으로 많으며,
// + 연산자가 concat메소드 보다 성능상 더 빠르기 때문에 + 연산자의 사용을 권장하고 있습니다.
