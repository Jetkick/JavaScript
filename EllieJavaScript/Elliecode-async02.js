
// Promise(약속) JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object(객체)

// Promise is a JavaScript object for asynchronous operation. = 콜백함수 대체제로서 사용하는 객체 함수
// State: pending -> fulfilled or rejected
// producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically( executor라는 함수가 자동적으로 실행됨? ).

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) = 비동기적으로 처리하는 것이 좋음.
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('INVALID_NO_NETWORK'));
  }, 2000);
});

// 2. Consumers : then, catch, finally

// Uncaught 라는 잡히지 않는 에러가 발생.
promise
.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally');
});

// 3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num)); 

// 4. Error Handling resolve(`${hen} => 달걀`)
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 달걀`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 숟가락?`), 1000);
  });

  // 1.
  // getHen()
  // .then(hen => getEgg(hen))
  // .then(egg => cook(egg))
  // .then(meal => console.log(meal));

  // 2.
  getHen()
  .then(getEgg)
  .catch(error => {
    return '달걀 말고 밀가루'
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

  