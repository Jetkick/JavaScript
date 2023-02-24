
// JSON ECMAScript 3rd 1999
// simplest data interchange format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) 
let json = JSON.stringify(true);
json = JSON.stringify(['apple', 'banana']);

const rabbit = {
  name : 'tori',
  color : 'white',
  size : null,
  birthDate : new Date(),
  jump : () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit); 
// console.log(json); 
// jump 함수는 Object에 포함된 데이터가 아니기 때문에
// JSON 화에서 제외됨. Symbol 같은 JS에만 있는 특별한 데이터도 JSON 에서 제외된다.

json = JSON.stringify(rabbit, ['name', 'color']); // (key, value) => {}
// console.log(json);
// 원하는 property 만 가지고 오고 싶을 때 배열이나 콜백함수로 가지고 올수 있다.

// 2.JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value : ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


// src = "https://docs.google.com/spreadsheets/d/1Ja38U-tdn_E2c-m_5HsJuDfecqSaNlZfUgFWPZeCWQc/edit?usp=sharing"