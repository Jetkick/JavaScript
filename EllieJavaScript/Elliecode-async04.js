

// async & await 의 하위인 Promise(약속) 를(도) 쓰는 이유.
// 순서를 보장하기 위해서!! await과 resolve가 쌓인 evnet에서 순차적으로 처리하기 위해서!

// async & await
// clear style of using promise :)

// 1. async

function fetchUser() {
  return new Promise((resolve, reject) => { resolve('ellie') })
}

async function fetchUsers () {
  return 'ellie';
}

const user = fetchUsers();
user.then(console.log);
console.log(user);

// 2. await ✨

function delay(ms) {
  return new Promise( resolve => setTimeout( resolve, ms ));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

/*
function getBanana() {
  return delay(2000)
  .then(() => '🍌');
} 
*/

async function getBanana() {
  await delay(2000);
  return '🍌';
}

/* function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  })
};

pickFruits().then(console.log); */


async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
};

// console.log(pickFruits());

// 3. useful Promise APIs

// Promise.all API
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// Promise.race API
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);