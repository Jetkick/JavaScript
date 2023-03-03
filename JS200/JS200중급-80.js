
// JS 200제 문자열을 특정 구분자에 의해 배열로 나누기 (split)

// String 내장 객체의 메소드 split은 문자열로 배열로 변환하여 반환합니다. 이 때 split 인자로 받은 구분자로 문자열을 분리한 후, 각각의 배열 요소에 넣습니다.

const capitals = `Prague, Czech Republic
Copenhagen, Denmark
paris, France
Madrid, Spain
Rome, Italy`

// console.log(capitals);

capitals.split('\n').forEach(s => {
  // console.log(s);
  const capital = s.split(',')[0];
  const country = s.split(',')[1];
  console.log(`${capital} is in ${country}`);
});
