
// JS2 200제 ES6의 향상된 객체 문법 알아보기 - 속성 계산명 (초급 31)

let obj = {};
for (let i = 0; i < 4; i++) {
  obj['key' + i] = i;
}
console.log(obj);

let profile = 'chloe:30';
let person = {
  [profile] : true,
  [profile.split(':')[0]] : profile.split(':')[1]
};
console.log(person);