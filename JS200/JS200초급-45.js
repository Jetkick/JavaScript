
// JS 200제 객체 속성 기술자 이해하기 (초급 45)

let user = {
  name : 'jeado'
};
let descriptor = Object.getOwnPropertyDescriptor(user,'name');
// console.log(descriptor);

// -----------

let user2 = {};
Object.defineProperty(user2, 'name', { // Object.defineProperty를 통해 객체 속성을 정의한다.
  // 첫 번째 인자는 속성을 정의할 객체이고 두 번째 인자는 속성명, 세 번째 인자는 객체 기술자입니다.
  value : 'jeado', // 값을 나타낸다.
  enumerable : true, // for---in 루프나 Object.keys 메소드같이 속성을 나열할 때 나열 가능 여부를 정의합니다. false일 경우 나열되지 않습니다.
  writable : false, // 값을 변경할 수 있는 여부를 정의합니다. flase일 경우 값이 변하지 않습니다.
  configurable : true // 속성 기술자를 변경할 수 있는 여부를 정의합니다. flase일 경우 속성 기술자를 다시 변경할 수 없습니다.
});
// console.log(user2.name);
user2.name = "bbo";
// console.log(user2.name); // writable 속성이 false이기 때문에 bbo로 값을 재할당해도 콘솔에는 바뀌지 않고 기존 값이 출력된다.

let user3 = {
  name : "jeado",
  toString() {
    return this.name;
  }
}; // user3의 객체에 toString 메소드로 문자열을 반환하는 요소를 담는다.
Object.defineProperty(user3, "toString", {
  enumerable : false // user3의 toString 요소의 객체 속성 enumerable 을 false로 재정의한다.
});
for (let key in user3) {
  // console.log(key); // 나열 기능을 닫았기 때문에 요소를 가져오는 반복문을 실행하여도 콘솔에 출력되지 않는다.
};

let user4 = {};
Object.defineProperty(user4, 'name', {
  value : "Jeado",
  configurable : false
});
delete user4.name; // configurable 속성을 false로 정의하였기 때문에 name 요소가 지워지지 않고 delete 메소드가 false가 리턴된다.
console.log(user4.name) // => Jeado 리턴을 확인
// console.log(user4); => {name : "Jeado"} 책에 따르면 이 값이 반환되어야 하는데 빈 객체가 반환된다??
Object.defineProperty(user4, "name", {
  writable : true
});
// 속성 기술자를 변경할 수 있는 여부를 false로 정의하였기 때문에 에러가 발생한다.