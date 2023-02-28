
// Js 200제 배열 자료형 확인하기 (isArray) (중급 64)

// 자바스크립트는 변수의 자료형이 동적으로 바뀔 수 있기 때문에 의도한 자료형인지 확인해야 하는 경우가 종종 있습니다.
// isArray 메소드는 배열 자료형 여부를 true/false로 간단하게 구별할 수 있습니다.

function callRoll(students) {
  if (!Array.isArray(students)) return; // 배열이 아닐시 함수 종료

  students.forEach((student) => {
    console.log(`Are you here, ${student}`); // forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다. => 배열 순회
  });
};

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);
