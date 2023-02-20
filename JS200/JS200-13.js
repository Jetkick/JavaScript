
// JS 200제 반복문 배우기 - for,  (입문 13)

// 반복문은 세미콜론으로 구분하며 첫 번째는 초기값, 두 번째는 조건식, 세 번째는 어떤 간격으로 값이 변화하는지 작성한다.

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

for(let i = 0; i < hometown.length; i++) { // 변수 i는 0부터 시작하여 홈타운의 배열 길이 값 만큼 1씩 증가한다 (배열안에 객체 데이터 값)
  let h = hometown[i]; // 홈타운 배열의 i번째 요소를 반환하여 변수 h에 할당. 배열의 길이만큼 요소를 반복 실행.
  // 변수 h는 변수 hometown 의 배열안에 변수 i 할당. 그러면 변수 i 는?

  if (!h || !h.city) continue; // 변수 h 또는 h에 할당된 객체의 값들을 확인하는 조건문.
  // 배열에서 가져온 요소의 정보(값)가 없는 경우. continue를 통해 다음 순서(요소)로 넘어가게 된다.
  
  console.log(i + ' 번째 실행입니다.'); // 반복문이 총 4번 실행되어야 하는데..
  // index 1 에 city 값이 없기 때문에 반복문이 실행되지 않음.

  if (h.name === '호석') {
    console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.'); // 호석의 고향은 전라도 광주 입니다.
    break; // index 2 가 실행되며 break 지시어도 실행되기에 for 문의 실행 종료로 배열의 마지막 요소는 실행되지 않음.
  }
};

// ex 

const sina = [
  a = [
    {one : 'if', two : 'else if', three : 'swith'},
    {b : 'd', c : 'e', f : 'g'}
  ],
  b = [
    {name : '철수', palce : '고양', city : '경기도'},
    {name : '민수', place : '호수공원', city :'일산'}
  ]

];
  const result = a.concat(b);

  for (let i = 0; i < result.length; i++) {
    let j = result[i];

    console.log(j);
  }

/*
함수 안에서 for 문을 실행해 보려고 하였으나 
접근 방식을 찾지 못하여 함수 사용 포기;;

i++ 와 i=+1 은 서로 다른 증감식 인 것 같다.
표현만 다르지 실행 값은 같을 줄 알았는대
i=+1 을 했을 시 무한 반복이 실행됐다.
*/