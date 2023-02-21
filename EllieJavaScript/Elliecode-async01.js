
// JavaScript is synchronous.
// Execute the code block by orger after hoisting.

//... hoisting : var, function, declaration 함수선언들이 자동적으로 제일 위로 올라가는것이 hoisting 이라고한다.
// 콜백함수 = 전달해준 함수를 나중에 호출하는것.

// setTimeout = 브라우저 API.
// 전달받은 함수를 타임아웃으로 지정한 시간이 지난후 함수 실행
// setTimeout(() => console.log('?'), 1000);

//... Synchronous callback

function printImmediately(print) {
  print();
};
printImmediately(() => console.log('hello'));  // --- 동기

//... Asynchronous callback

// 자바스크립트 엔진이 모든 함수를 호이스팅 하기 때문에 함수를 먼저 실행한다. (언어마다 콜백을 지원하는 방식이 다름)
function printWithDelay(print, timeout) {
  setTimeout(print,timeout);
}
printWithDelay(() => console.log('async callback'), 3000); // --- 비동기  


// Callback Hell example
// http랑 연결 안되서 실행 안됨;
class UserStorage {
  loginUser( id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id); 
      } else {
        onError(new Error('no found'));
      }
    }, 2000);
  };
   
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if ( user === 'ellie') {
        onSuccess({ name : 'ellie', role : 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
};

const userStorge = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorge.loginUser(
  id,
  password,
  user => {
    userStorge.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      }, error => {console.log(error)}
    );
  }, (error) => {
    console.log(error)
  }
);

// src = "https://docs.google.com/spreadsheets/d/1rIfh31AoDR9TD86YRZJbgsWDlvMz137CTg0N993JUBs/edit#gid=0"