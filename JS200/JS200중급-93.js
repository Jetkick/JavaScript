
// JS 200제 배열의 순서를 반대로 나열하기 (reverse) (중급 93)

// Array 객체의 reverse 메소드는 배열 순서를 반대로 나열합니다. 함수 호출시 원본 배열을  변형하기 때문에 주의해야 합니다.

const str = 'abcdefghijklnmopqrstuvwxyz';
const arr = str.split('');
arr.reverse();

console.log(arr.join(''));

