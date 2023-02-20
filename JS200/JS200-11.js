
// JS 200제 조건문 배우기 - if, else if, else (입문 11)

const number = 4;
if (number ==1) {
  console.log('number는 1 입니다');
} else if (number == 2) {
  console.log('number는 2 입니다');
} else if (number == 3) {
  console.lo('number는 3 입니다');
} else {
  console.log('number는 1, 2, 3 중 해당되는 것이 없습니다.');
}

/* 
if (표현식1) {
  명령문1
} else if (표현식2) {
  명령문2
} else if (표현식3) {
  명령문3
}  else {
  명령문 4
}
*/

// ex

const result = 'hello';

if (result > 100) {
  console.log('true?');
} else if (result == 'hello') {
  console.log('true')
} else if (result = 'hi') {
  console.log('true?') 
} else { 
  console.log('false')
}

// else 는 모든 조건들이 '참' 이 아닐 시 반환하며, () 조건이 들어가지 않음
// else () {} = 구문 오류