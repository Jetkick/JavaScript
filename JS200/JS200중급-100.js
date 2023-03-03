
// JS 200제 중첩된 배열을 단일하게 만들기 (reduce) (중급 100)

const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];

const result = arr.reduce((acc, el) => {
  return acc.concat(el);
}, []);
       
console.log(result); // => result = [1, [5], [15], ['배열 나열하기'], 'JavaScript'] X
// [1, 2, 3, 4, 5, 6, '배열', '나열하기', 'javaScript'];