
// JavaScript가 head 안에 있을 시
// html 다운로드 => parsing HTML(코드 분석) => CSS와 병합 DOM 요소로 변환
// script src = JavaScript 파일 다운로드 => blocked and JavaScript 실행 => parsing html(page is ready)
// 자바스크립트의 준비가 끝날 때 까지 다른 동작들이 멈춰 있기 때문에 사용자 입장에서 매우 불편함


// JavaScript가 body 안에 있을 시
// parsing html & page is ready => script fetching.js executing.js 다운로드 & 실행
// 간단한 컨텐츠를 빠르게 확인할 수 있는 장점은 있으나, 
// JavaScript에 의존하는 요소 꾸미기나 데이터를 내려받기 전 까지는 의미있는 컨텐츠는 확인할 수 없는 단점이있다.
// 정상적인 페이지를 확인할 수 없다.

// JavaScript head + async
// parsing html => blocked (executing.js) => parsing html (page is ready) 
// async fetching.js 
// html 코드를 읽어들이면서 비동기 함수를 이용해서 병렬식으로 Js 파일을 내려받는다.
// 그 후 JS 파일의 준비가 끝나면 동작을 멈추고 JS 코드를 읽은 후 다시 parsing 을 시작한다. => page is ready
// 다운로드 받는 시간을 절약할 수 있으나, JS파일이 준비가 끝나는대로 parsing 을 멈추고 JS 를 실행하기 때문에
// html 의 파싱을 하며 준비하는 요소들이, 준비가 갖춰지기 전에 JS 파일을 실행하기 때문에 만약 =>
// JS 파일에 html 요소를 조작하는 기능이 있을시, 준비가 덜 된 정의되지 않은 html 요소를 사용한다면 에러가 날 위험성이 있다.
// 파싱하는 도중 JS 파일을 실행하기 때문에 사용자가 페이지를 사용하기 까지 시간이 걸릴 수가 있다.

// JavaScript head + defer
// html을 파싱하면서 병렬로 JS 파일을 내려받는다. async와 비슷한 방법인대 다른 점은 
// JS 파일의 준비를 끝마쳐도 파싱을 멈추지 않는다는 것이다. 파싱을 먼저 끝내서 사용자에게 페이지를 보여준 후 
// JS 파일을 실행한다. 그래서 defer 방식이 효율적이면서 안전하다는 장점을 가지고 있다.

// 내려받아야할 JS 파일이 많아도 파싱을 끝낸 후에 JS 파일을 실행하기에 작동을 멈추는 구간이 없어서 효율적이다.


// 'use strict'; strict mode syntax =  바닐라 자바스크립트

// 자바스크립트는 매우 유연한 언어이다. 다른 언어에서는 하지 못하는 행동을 제약없이 
// 할 수 있는 부분이 많다보니 유연하면서 위험한 부분이 많다.
// 그래서 다른 언어와 같이 제약을 걸어주고 싶을 때 strict mode 를 켜주면 된다.
// flexible === dangerous

// src = "https://docs.google.com/spreadsheets/d/1xlXG4A1ALo8FGNmbAl4QT_WCVfXDERsieGVoWSkOf_M/edit?usp=sharing"