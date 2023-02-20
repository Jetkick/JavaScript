
// JS 200제 조건문 배우기 - switch,  (입문 12)

/* 
switch(표현식) {
  case 값1 :
    명령문1
    break;
  case 값2 :
    명령문2
    break;
    default :
    명령문3
}
*/


const subject = '자바스크립트';
switch (subject) { // 표현식
  case 'c언어' : // switch 문 case 
    console.log('초보자를 위한 C++ 200제'); // { 명령문 }
    break; // 코드 실행 종료
    case '자바스크립트' :
      console.log('초보자를 위한 자바스크립트 200제');
      break;
      case '파이썬' :
        console.log('초보자를 위한 파이썬 200제');
        break;
        default :
        console.log('이젠 초보자가 아닙니다');
        break;
};


// ex

const getMovieDetailPage = '독립 영화 상세 페이지';

switch (getMovieDetailPage) { 
  case 'C++' :
    console.log('초보자를 위한 독립 영화 추천 10선');
  case '독립 영화 상세 페이지' :
    const getMoviePage = '상세 페이지';
    console.log(getMoviePage);
    break;

    default : 
    console.log('자바스크립트 화이팅');
};

// break 문을 사용 하지 않으면 조건에 해당하는 값부터 계속해서 명령문을 반환함, 원치 않은 값도 반환될 수 있음