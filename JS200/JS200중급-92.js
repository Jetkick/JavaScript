
// JS 200제 배열 정렬하기 (sort) (중급 92)

// Array 객체의 sort 메소드는 인자로 비교 함수를 대입하여 배열 요소들을 정렬합니다. 이 때, 비교 함수에서 return으로 반환되는 비교값에 따라 순서가 정해집니다.

/*
비교값 > 0 : a가 b보다 작은 숫자의 인덱스를 가집니다. 배열의 작은 인덱스라는 뜻은 배열에서 앞부분에 위치하는 것을 의미합니다. 즉, a가 b보다 앞에 위치합니다.

비교값 < 0 : a가 b보다 작은 숫자의 인덱스를 가집니다. 아까와 반대로 b가 a보다 앞에 위치합니다.

비교값 = 0 : a와 b의 위치를 변경하지 않습니다.
*/

// sort 메소드는 새로운 배열을 반환하지 않고 원본 배열 자체를 변경시키기 때문에 주의해야한다.

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
  {id : 2, name : 'Leo'},
  {id : 0, name : 'Daniel'},
  {id : 3, name : 'Asher'},
  {id : 4, name : 'Chloe'},
  {id : 1, name : 'Chloe'}
]

numArr1.sort(function(a, b) {return a - b });
numArr2.sort(function(a, b) {return b - a });
objArr.sort(function(a, b) {
  if (a.name > b.name) return 1;
  else if(b.name > a.name) return -1;
  else return 0;
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);