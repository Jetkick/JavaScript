

// 1. class

// 생활 코딩
// object oriented programming 객체 지향 프로그램(OOP)
// procedural programming => object oriented programming

// procedural programming의 부족한 점을 보완 한 것이 object oriented programming

// c 언어 procedural 언어 함수를 불러서 함수를 호출하는 프로그래밍
// Java 언어 object oriented programming 언어 = 객체가 서로 인터렉션 하면서 돌아가는 프로그램을 만들때 쓰는 언어?


// 엘리
/* 
class person { class person에는 name, age 라는 속성(field)(property), speak() 라는 행동(method) 이 들어있다.
  name; 
  age;
  speak();
}
관련이 있는 데이터들을(변수, 함수) 묶어서 calss에 포함시킨다고 생각하면 된다.
fields(데이터)만 들어있는 경우에는 Data class 라고 한다. 더 나아가 상속과 다양성이 가능하다.
*/


// Class 1. template(청사진) 2. declare once 3. no data in 
// class 자체에는 데이터가 들어있지 않으며, 어느 데이터만 들어올 수 있도록 정의를 해놓고, 한번만 선언한다.

// Object 1. instance of a class 2. created many times 3. data in
// 정의된 클래스를 이용해서 데이터를 넣어서 만드는 것이 object 이다. 
// 새로운 인스턴스를 생성하면 객체가 되는 것이다. 
// 객체는 클래스를 이용해서 많이 만들 수 있다. 클래스는 정의만 한 것이라 메모리를 할당하지 않으나, 객체를 만들며 데이터를 넣으면 메모리가 할당이 된다.


// Object-oriented programming 객체 지향 프로그래밍
// class : template
// object : instance of a class

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// class는 기존의 JavaScript 위에 추가된 것이다.
// 기존의 prototype을 기반으로 문법만 추가된 것이다.



// 1. Class declarations

class Person {
  constructor(name, age) { 
    this.name = name;
    this.age = age; 
  }
// 클래스 Person 생성 => constructor 생성자를 이용해서 object를 만들 때 필요한 데이터를 전달합니다
// 전달 받은 데이터를, 클래스에 존재하는 두가지 fields name, age 전달된 데이터를 바로 할당해 준다.

// methods?
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
// 새 객체 생성. 변수 ellie 에 class Person 호출
// console.log(ellie.name); // 객체 값 불러오기
// console.log(ellie.age);
// ellie.speak(); // speak 함수 호출...


// 2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);



// 3. Fields (public, private) 최근에 추가된 메소드 그냥 이런게 있다.
// Too soon!

class  Experiment { 
  publicField = 2;
  #privatedField = 0; //
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined



// 4. Static properties and methoods 스태틱 메소드
// Too Soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  } 

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding => 클래스 자체에 값이 할당됨.

Article.printPublisher(); // Dream Coding => 클래스 자체에 값이 할당됨.
// 스태틱 함수를 호출할 때도 클래스 이름을 이용해서 호출해야함

// Static은 object 마다 값이 할당 되는 것이 아니라, 클래스 자체에 부여되는것
// TypeScript를 이용할 때도 굉장히 많이 쓰임!!
// 오브젝트에 상관없이, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 것 이라면 스태틱과 스태틱 메소드를 이용해서 작성하는 것이 메모리의 사용을 줄이는 대도 용이함.



// 5. 상속 & 다양성 : 객체 지향 언어의 꽃?
// Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
};

class Rectangle extends Shape {}

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceof
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true

console.log(triangle.toString());

// src = "https://docs.google.com/spreadsheets/d/1RrkzNf8fmp9NvK-GBtNBlF3n09i7JF0zIEsE_GYc2eA/edit?usp=sharing"