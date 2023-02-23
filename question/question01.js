

// 반복문을 사용해서 arr 모든값에 2를 더해주세요.

const arr = [1,2,3,4,5,6]
const a = [];

for (let i = 0; i < arr.length; i++) {
  a.push(arr[i] + 2);
  
  // a[i] = arr[i] + 2; // 변수 i 의 배열 값을 변수 a 가 초기화한 배열안에 변수 i 값을 담아낸다.
  // arr[i] = arr[i] + 2
}
console.log(a);