
// JS 200제 반복문 배우기 - while (입문 15)

// while 반복문은 지시어 while 로 시작합니다. 그 다음 소괄호() 안에 조건식이 들어가는데,
// 이 조건식의 결과값은 true 또는 false만 가능합니다. 그리고 조건식이 true를 만족하는 경우에만
// 중괄호{} 안의 문장들이 실행됩니다. 조건식이 false가 되면 더이상 반복 실행하지 않으며 while 반복문에서도 break와 continue 문을 사용할 수 있습니다.

/* while (조건식) {
  반복하게 될 문장
}

do {
    반복하게 될 문장
  } while (조건식)
*/

let hometown = [
  {name : '진', city : '과천'},
  {name : '남준', place : '일산', city : '고양'},
  {name : '호석', place : '광주', city : '전라도'},
  {name : '지민', place : '부산', city : '경상도'}
];

const isHometown = function (h, name) {
  // console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을 찾습니다.`);
  
  if (h.name === name) {
    console.log(`${h.name} 의 고향은 ${h.city} ${h.place} 입니다.`);
    return true;
  }
  return false;
}

// 객체인 h의 name 과 인자로 받은 name 이 다른 경우 false 를 반환하며 종료. 값이 동일하면 console.log를 출력하고 true를 반환합니다.

while (h = hometown.shift()) {
  if (!h.name || !h.place || !h.city) continue;

  let result = isHometown(h, '호석');
  if (result) break;
}

let i = 0;
let names = ['남준', '정국', '윤기', '호섭'];
let cities = ['경기', '부산', '대구', '광주'];

do {
  hometown[i] = {name : names[i], city : cities[i]};
  i++;
} while (i < 4);
// for (let i = 0; i = hometown.length; i++);

// console.log(hometown);

// ex 1

let myMusic = [
  {name : '진', genre : '발라드'},
  {name : '남준', genre : '팝', soul : '있음'},
  {name : '호석', genre : '제즈', soul : '없음'}
];


const music = (favoriteMusic, genre) => {
  console.log(`함수가 실행됩니다 ${favoriteMusic.name} 이 좋아하는 장르는 ${favoriteMusic.genre} 입니다.`);

  if (favoriteMusic.name === genre) {
    console.log(`${favoriteMusic.name} 이 좋아하는 장르는 ${favoriteMusic.genre} 이고, 소울이 ${favoriteMusic.soul}`);
    return true;
  }
  return false;
}

for (let i = 0; i < myMusic.length; i++) {
  const favoriteMusic = myMusic[i];
  if (!favoriteMusic.name || !favoriteMusic.genre || !favoriteMusic.soul) continue;

  let result = music(favoriteMusic, '남준');
  if (result) break;

};

// while (favoriteMusic = myMusic.shift()) {
//   if (!favoriteMusic.name || !favoriteMusic.genre || !favoriteMusic.soul) continue;
  
//   let result = music(favoriteMusic, '남준');
//   if(result) break;

// Cannot access 'music' before initialization 선언이 되지 않았기에 먼저 사용할 수 없음.
//