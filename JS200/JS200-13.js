
// JS 200제 반복문 배우기 - for,  (입문 13)

// 반복문은 세미콜론으로 구분하며 첫 번째는 초기값(초기문), 두 번째는 조건식(표현문, 조건문), 세 번째는 어떤 간격으로 값이 변화하는지(증감문, 증감식) 작성한다.

for (let i = 0; i < 10; i++) {
  // console.log(i + '번째 반복 문장 입니다.');
}
// 변수 i에 숫자 0 값을 할당하여 설정한다. 변수 i 가 숫자 10이 될 때까지 중괄호 블록 안의 문장이 반복하여 실행되며,
// 반복 실행될 횟수는 i++를 통해 정해집니다. 변수 i 가 +1 의 간격으로 증가하기 때문에, 반복문은 총 10번 실행된다.



const hometown = [
  {name : '남준', place : '일산', city : '고양'},
  {name : '진', place : '과천'},
  {name : '호석', place : '광주', city : '전라도'},
  {name : '지민', palce : '부산', city : '경상도'}
];

for(let j = 0; j < hometown.length; j++) { // 변수 i는 0부터 시작하여 홈타운의 배열 길이 값 만큼 1씩 증가한다. (배열안에 객체 데이터 값) hometown[0], hometown[1] ...
  let h = hometown[j]; // 홈타운 배열의 i번째 요소를 반환하여 변수 h에 할당. 배열의 길이만큼 요소를 반복 실행.

  if (!h || !h.city) continue; // 변수 h 또는 h에 할당된 객체의 값들을 확인하는 조건문.
  // 배열에서 가져온 요소의 정보(값)가 없는 경우. continue를 통해 다음 순서(요소)로 넘어가게 된다.
  
  console.log(j + ' 번째 실행입니다.'); 
  // 반복문이 총 4번이 실행되어야 함.
  // index 1 에 city 값이 없기 때문에 콘솔에 찍히지 않음 (!h.city) continue로 인해 값을 패스함.

  if (h.name === '호석') {
    console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
    break;
    // index 2 가 실행되며 break 지시어도 실행되기에 for 문의 실행 종료로 배열의 마지막 요소는 실행되지 않음.
  }
};

// ex 1 

const a = [1, 2, 3, 4, 5]
let b;
for (let i =0; i<a.length; i++) {
  b= a[i];
}

console.log(b);

// 변수 a의 모든 배열 값을 변수 b 에 할당을 합니다.
// 마지막으로 할당된 숫자 5 가 변수 b에 남아
// 숫자 5가 출력됩니다.

// ex 2

const sina = [
  c = [
    {one : 'if', two : 'else if', three : 'swith'},
    {b : 'd', c : 'e', f : 'g'}
  ],
  d = [
    {name : '철수', palce : '고양', city : '경기도'},
    {name : '민수', place : '호수공원', city :'일산'}
  ]

];
  const result = c.concat(d);

  for (let i = 0; i < result.length; i++) {
    let j = result[i];

    console.log(j);
  }

// sina 값을 순회한 만큼 콘솔에 호출
// i < result.length 

const e = [1,2,3,4,5]

const logger = (num) => {}

  e.forEach(v=>{
  logger(v)
  // console.log(v);
  });

// ex 3

const f = [
  {one : 'JS'},
  {two : 'Express'}
],
g = [
  {three : 'TypeScript'},
  {four : 'node'}
];

const result2 = f.concat(g);
const value = (x) => {
}

  result2.forEach(x => {
    value(x)
    // console.log(x);
  })


/*
증감문 : i++, i=+1
*/