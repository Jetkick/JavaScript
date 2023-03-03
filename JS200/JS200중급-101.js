
// JS 200제 객체에서 키만 추출하기 (keys) (중급 101)

// Object 객체의 메소드 keys를 활용하면, 객체의 키(key) 들만 추출할 수 있습니다. 추출한 키들은 배열에 담아 반환됩니다.

const obj = {
  movie : 'Sunny',
  music : 'Like Sugar',
  style : 'Retro',
  price : Infinity
};

const arr = Object.keys(obj);

console.log(arr);

