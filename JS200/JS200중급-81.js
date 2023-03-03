
// JS 200제 배열 뒤에 요소 추가하기 (push) (중급 81)

// 자바스크립트 배열 자료형은 -- Linked List -- 자료구조 형태를 갖고 있습니다. 따라서 배열 앞과 뒤에서 요소를 추가하는 것이 가능합니다.
// Array 내장 객체 메소드 push 는 배열 뒤에서 요소를 추가합니다.

const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name => {
  console.log(name);
})
console.log(festa);