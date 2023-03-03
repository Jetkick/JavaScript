
// JS 200제 객체를 배열로 변환하기 (entries) (중급 103)

// object 객체의 메소드 entries 는 객체를 배열로 변경합니다. 이 때 객체 내부 요소도 { key : value } 을 [ key : value ] 배열로 변경합니다.

const obj = {
  movie : 'Sunny',
  music : 'Like Sugar',
  style : 'Retro',
  price : Infinity
};

const modifiedobj = Object.entries(obj);
console.log(modifiedobj);