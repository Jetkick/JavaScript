
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// object = { key : value }; = property
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print (person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name : 'ellie', age : 4};
print(ellie);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
// 객체의 두가지 호출 방법은 쓰임새가 있다. 차이점은?

ellie['hasJob'] = true;
// console.log(ellie.hasJob);

// 3. Property value shorthand

const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dave', age : 4 };
const person4 = new Person('ellie', 30);

// 4. Constructor Function
function Person(name, age) {
// this = {};
this.name = name;
this.age = age;
// return this;
}

// 5. in operator : property existence check (key in obj)
// 해당하는 오브젝트 안에 key 값이 있는지 없는지 확인하는 keyWord
console.log('name' in ellie); // true
console.log('random' in ellie); // false

// 6. for..in vs for..of
// for (key in obj)

/* for (key in ellie) {
  console.log(key); // (속성명 in 객체명)
}*/

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  // console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'ellie', age : 20};
const user2 = user;

user2.name = 'coder';
// console.log(user);

