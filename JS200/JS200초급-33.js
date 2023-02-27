
// JS 200제 심볼형 이해하기 (초급 33)

const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
  name : 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility]); // 심볼은 객체의 키로 사용 가능하다.
  // 사용하기 위해선 변수에 담아 놓고 불러와서 사용해야한다.

for (let key in user) {
  console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));
// Symbol은 고유한 값을 가지다 보니 보통의 반복문이나 메소드, JSON 문자열로 가지고 올 수는 없습니다.


const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
// 다만 객체의 키로 사용하며, getOwnPropertySymbols 해당 메소드를 통해서 가지고 올 수는 있습니다.
