
// JS 200제 배열에 특정 구분자를 넣어 문자형으로 변환하기 (join) (중급 85)

// Array 객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 변환합니다.

const dialogue = [
  'Fear is the path to the dark side',
  'Fear leads to anger',
  'Anger leads to hate',
  'Hate leads to suffering',
  'I sense much fear in you.'
];

// console.log(dialogue.join('. '));
console.log(dialogue.join('.\n'));