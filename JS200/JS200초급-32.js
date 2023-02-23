
// JS 200제 ES6의 향상된 객체 문법 알아보기 - 비구조화 할당

// let obj = {
//   a : 1,
//   b : 2,
//   c : 30,
//   d : 44,
//   e : 5
// };

// let {a, c} = obj;

// console.log(a);
// console.log(`c >>> ${c}`);

// let {
//   a : newA = 10,
//   f : newF = 5
// } = obj;

// console.log(`newA >>> ${newA}`);
// console.log(`newF >>> ${newF}`);

let arr = [1, 2, 30, 44, 5]

let [b, c, ...rest] = arr;

console.log(`0) b >>> ${b}`);
console.log(`${c}`);
console.log(`0) rest >>> ${rest}`); // 변수 rest = [30, 44, 5];

let [a=10, f=9] = [1, 2];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`${f}`);


function getArr() {
  return [1, 2, 3, 4, 5, 6];
};

[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`${f}`);

// 구조 분해 할당, 비구조 분해 할당