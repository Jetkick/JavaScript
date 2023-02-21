
// 1번 join
function fruits1 () {

fruits1 = ['apple', 'banana', 'orange'];

// join 메소드를 통해서 배열의 값을 string 으로 변환해준다.
const result = fruits1.join(',');

return result;
};
// console.log(fruits1())

// 2번 split
const fruits2 = () => {
  
// string 값을 배열로 바꾸는 방법.
const fruits2 = '사과,키위,바나나,앵두';

// split 메소드를 통해서 string 값을 array 로 변환해준다.
const result = fruits2.split(',');

return result
};
// console.log(fruits2())

// 3번 reverse
function fruits3 () {

  fruits3 = [1, 2, 3, 4, 5];

  // reverse 메소드를 통해서 배열의 순서를 거꾸로 반환해준다.
  const result = fruits3.reverse();

  return result 
};
// console.log(fruits3());

// 4번 slice
const fruits4 = () => {

  const fruits4 = [1, 2, 3, 4, 5];

  // splice 메소드는 index의 범위를 정해서 그 범위의 값을 삭제해준다.
  // const result = fruits4.splice(0, 2);

  // slice 메소드는 index의 범위를 정해서 그 범위의 값을 반환해준다.
  // 방식은 위와 동일하며
  // 변수에 담긴 값에 필요한 값만 추출하고 싶을때 사용.
  const  result = fruits4.slice(2,5);
  
  console.log(fruits4)
  console.log(result)
}
// console.log(fruits4());


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
};

//  5번 find
const students = () => {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  // find API를 사용해서 조건에 맞는 값을 찾는다.
  // 콜백함수를 만들어서 전달해줘야한다.
  // 콜백함수이기에 배열에 있는 모든 요소를 하나씩 호출하며, 동기적으로 순회를 하며,
  // 조건이 맞아 true 값이 나올때 까지 호출하며 트루 값이 나오면 find 메소드가 동작을 멈추므로
  // 조건에 맞는 모든 값을 가져오지는 않는다.
  // const result = students.find(function(student) {
  //   return student.score === 90;
  // });
 
  //위 아래가 같다!
  const result = students.find((student) => student.score === 90);

  return result  
};
// console.log(students());

// 6번 filter
function fruits6 () {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  // filter API를 사용해서 조건에 맞는 값만 반환해주도록한다.
  // enrolled가 true인 값만 가지고 와 준다.
  // 콜백함수를 전달해줘야한다.
  // 
  const result = students.filter((student) => student.enrolled);

  return result
};
// console.log(fruits6());

// 7번 map
const fruits7 = () => {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ]; 

  // 배열안에 들어있는 요소 한가지를 다른 것으로 변환해주는 API
  // 콜백함수를 전달해줘야한다.
  // 콜백함수를 이용하여 배열안에 담겨있는 요소를 새로운 값으로 변환해준다.
  // 배열안에 있는 요소들을 원하는 함수를 이용하여 다른 방식의 데이터로 반환이 가능.
  // map을 이용하여 배열안의 객체값을 다시 배열 값으로 바꿈
  // map은 전달받은 값을 배열로 리턴함
  // 콜백함수로 전달되는 인자는 가능한 이해하기 쉽게 사용하는 것이 좋음.
  const result = students.map((student) => student.score);

  return result
}
// console.log(fruits7());

// 8번 some & every
function fruits8 () {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ]; 

  // 배열안에 있는 요소를 반환해주며 조건에 해당하는 값이 true가 맞을때 반환해준다.
  // 배열안에 조건에 만족하는 값이 하나라도 있을때 true를 반환
  // 콜백함수를 전달해줘야한다.
  // boolean 타입의 값만 반환해준다.
  const result = students.some((student) => student.score < 50);

  // 배열안에 모든 요소를 만족해줘야 true를 반환해주는 API
  // 조건이 하나라도 맞지 않으면 false를 반환
  // 콜백함수를 전달해줘야한다.
  // boolean 타입의 값만 반환해준다.
  const result2 = !students.every((student) => student.score < 50);

  return result
}
// console.log(fruits8());

// 9번 reduce
const fruits9 = () => {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ]; 

  // reduce는 배열안의 모든 요소들의 값을 호출하며, 누적된 값을 함께 같이 반환해준다.
  // reduce는 배열의 모든 값을 순회하며 두번째 인자의 반환 값을 첫번째 인자로 넣어주고 그 다음 값을 두번째 인자로 반환해준다.
  // 콜백함수를 전달해줘야한다.
  //
  const result = students.reduce((prev, curr) => {

    return prev + curr.score;
  }, 0);

  // console.log(result / students.length);
  return result
}
// console.log(fruits9());

// 10번 
function fruits10 () {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ]; 
  
  // 함수형 프로그래밍의 예

  // 1. map 메소드를 이용하여 필요한 값을 추출 => 배열에 담아 반환
  const result = students.map((student) => student.score);

  // 2. 거기에 join 메소드를 이용하여 배열에 담긴 값을 string으로 변환
  const result2 = students.map((student) => student.score).join();

  // 3. filter 메소드를 이용하여 50점 이상의 값만 반환하도록 조건을 만듬.
  const result3 = students
  .map((student) => student.score)
  .filter(score => score >= 50)
  .join();

  return result3
}
// console.log(fruits10());

function fruitsBonus () {

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ]; 

  // sort 메소드를 이용하여 값을 정렬할 수 있음
  // 콜백함수를 전달해줘야한다.
  // a와 b에 조건을 줄 수 있으며 작은 숫자부터 정렬할 수도 큰 숫자부터 정렬할 수도 있다.
  const result = students
  .map((student) => student.score)
  .sort((a, b) => b - a)
  .join();
  return result
}
// console.log(fruitsBonus());

// src = "https://docs.google.com/spreadsheets/d/1DjN7gc0dw-9SB41l0wRmdMeQIvaRKD0PevXZiVRC8OM/edit#gid=0"