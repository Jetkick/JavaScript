
'use strict';
// 프로그래밍에서 가장 중요한 것? 입력 연산 출력

// 2015년 ES6

// 2. 변수(Variable) : 변경될 수 있는 값 = rw(read/write)
// var : 대부분의 언어에서는 선언과초기화를 하는 것이 정상인대, JavaScript 변수 var 은 선언을 하지않고 초기화를 먼저 진행해도 문제가 없다는 미친짓이 가능하다. 그리고 block scope를 무시하고 사용할 수 있다. (has no Block scope)


// Contants : const는 상수 변수이다. 값이 바뀌지 않는 변수이며, 값을 다시 초기화 하려고 하면 에러가 난다. 보안상의 이유나, 코드를 변경함에 있어 실수를 방지하는데 도움이 된다.
// r( read only )
// Immutable data type
// - security
// - thread safety
// - reduce human mistakes

// 반대로 let : 초기화가 가능하다

// 3.
// Block scope {} : 블럭 밖에서는 블럭 안의 값을 읽을 수 없고, 블럭 안에서는 블럭 밖의 값을 읽을 수 있다.
// global scope = 어느 곳에서나 접근 가능한 값이다.
// 글로벌한 변수들은 어플리케이션이 실행 되는 순간부터 끝날 때 까지 항상 메모리가 할당되어있다.
// 가능한 최소한으로 사용하는 것이 좋음, 클래스나 함수 if나 for loop 등 팔요한 부분만 정의해서 사용하는 것이 좋다. 



// 변수 타입은 => Wecode 참고 자료도 한번 확인
// 4. Variable types = 변수 타입 = 어떤 프로그래밍 타입이든 2가지 타입으로 나뉨.

// primitive type, single item : number, string, boolean, null, undefined, symbol 이 있다.
// 더 작은 단위로 나뉘어질 수 없는 한가지 아이템들

// object type, box container = 
// 싱글 아이템들을 여러개 묶어서 한 단위로 관리할 수 있는 것

// function(data type), first-class function 

// 메모리에 값이 저장되는 방식
// primitive type = 값 그 자체가 메모리에 저장됨
// object type = 메모리에는 reference 가 저장된다. 이 reference 가 객체를 지정하고 있으며, ref를 통해서 object가 담겨있는 메모리를 찾아줘 객체에 담겨있는 값을 반환한다.

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Immutable data : 변경할 수 없는 데이터 타입, primitive types : 데이터 자체를 변경하는건 불가능 하나 변수를 이용하여 string(값)을 바꿀 수는 있다.
// Mutable data types : all objects by default are mutables in JS



 // object => ref => name => ellie
//  (ellie)              => age  => 20

// Number.
// infinity, nAn = 'not a number'

// string
// template literals (string) = `${}` 
// 새로운 문자열 표기법

// const bom = 'c';
// const branch = 'hello ' + bom;
// console.log();

// boolean
// null = 명확하게 지정한 비어있는 값. type = object

// undefined = 선언은 되었으나 값이 지정되지 않은 비어있는 값

// symbol = 고유한 식별자나 우선 순위를 주고 싶을 때 사용한다.
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// 심볼은 동일한 값을 지정했어도 서로 다른 식별이다.
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1 === symbol2); = false

// 동일한 심볼을 만들고 싶을 땐 Symbol.for() = true

// Dynamic typing : dynamically typed language
// JavaScript 는 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있다.

let text = 'text';

text = '8' + 2; // 새로 초기화
console.log(`value : ${text}, type : ${typeof text}`); // string 과 number string으로

text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // string 이 number 로

// src = "https://docs.google.com/spreadsheets/d/1jPgKFwDbmccGt6ulTNG_5LTHwBaxzo8GpWPPNOsjlog/edit?usp=sharing"