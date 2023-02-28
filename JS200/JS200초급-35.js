
// JS 200제 예외 처리하기 (초급 35)

// Error Handling?

function checkNumber(val) {
  if (typeof val !== 'number') throw '유효하지 않은 값입니다.'; // typeof val을 통해 숫자형 값이 아닌 경우, throw문을 통해 함수 블록을 빠져나갑니다.
  console.log('숫자형 값으로 확인되었습니다.') // 불일치 연산자는 값의 내용이 다르거나 다른 자료형인 경우 참을 반환합니다.
}

try {
  checkNumber(100);
  checkNumber('wrong type');
} catch (error) {
  console.log(`에러가 발생했습니다 >>> ${error}`);
} finally {
  console.log('완료');
};

// 숫자100 과 string 'number' 는 false이기 때문에 콘솔 값을 출력하고
// 문자열과 'number' 는 값의 내용이 다름으로 true 이기 때문에 throw를 반환한다.