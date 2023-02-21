
// 배열 개념 정리

// 1. Declaration
const arr1 = new Array();
// 총 길이가 2인 배열 index 0, 1
const arr2 = [1, 2];

// 2.Index position
const fruits = ['사과', '바나나'];
// 배열 길이 2, 인덱스에 접근하여 배열 값을 가져올 수 있음

// 3. Looping over on array
// a. for
for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
}

// c. froEach
fruits.forEach(function (fruit) {
});


// 배열 메소드  정리
// 가장 기본적이면서 가장 쓰임새가 많은 Array

// 4. addtion, deletion, copy
// push : add an item to teh end
// push 메소드는 배열의 맨 마지막에 아이템을 추가한다.
fruits.push('딸기', '복숭아');

// pop : remove an item from the end
// pop 메소드는 배열의 맨 마지막의 값을 삭제한다.
fruits.pop();

// unshift : add an item to the benigging
// unshift 메소드는 배열 맨 앞에 아이템을 추가한다
fruits.unshift('딸기', '망고');

// shift : remove an item from the benigging
// shift 메소드는 배열 맨 앞의 아이템을 삭제한다.
fruits.shift();

// note!! shift, unshift are slower than pop, push
// 나중가서 수많은 배열의 길이가 존재할텐데 배열의 길이가 길수록
// 배열의 맨 앞에서 작업을 하는 것이 느릴 수 밖에 없는 이유가
// 배열을 추가할 때는 첫번째 인덱스를 비우기 위해 첫번째 인덱스의 값이 두번째 인데스로 옮겨지고
// 그 작업이 모든 배열의 길이에서 진행되고, 역시 배열을 삭제하기 위해서는 첫번째 인덱스의 값을 삭제하고
// 모든 배열의 값들을 앞으로 당겨줘야 하기 때문에 느릴 수 밖에 없다. (배열의 전체 데이터를 건드릴 수 밖에 없기 때문에)
// 그렇다보니 속도가 우선인 작업에서는 배열의 맨 마지막에서 작업을 하는 push,pop 이 상대적으로 빠를 수 밖에 없다.
// 중간에서 데이터를 넣고 빼는 작업은 그 배열의 index 값만 건드리기에 이 작업도 빠르다. 배열 전체를 건드리지 않음.
// 정렬, 정규화 법칙?

// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');

// splice 메소드는 첫번째 인자에서 어디부터 지울지 범위를 정해주고,
// 두번째 인자에서 갯수를 지정해서 지울수 있게끔 한다. 범위를 지정해주지 않으면 지정한 범위부터 모든 값을 지운다.
// 세번째 인자에서는 지정한 범위만큼의 값을 지운후 지우고 남은 index 자리에 추가하고 싶은 값을 넣는다.
fruits.splice(2, 2, '에베베');

// combine two arrays
// 두가지 배열을 묶어서 표현해주는 concat
// concat 의 대상이 된 배열의 값이 기준이 된 배열의 값의 맨 뒤에 값이 합처진다.
const fruits2 = ['메주', '계피나무']
const newFruits = fruits.concat(fruits2);

// searching
// 배열안의 값을 찾는 방법 1. Index 2. Includes

// console.log(fruits);
console.log(fruits.indexOf('에베베'));
console.log(fruits.indexOf('어?'));
console.log(fruits.includes('에베베'));
console.log(fruits.includes('어?'));  

// lastIndexOf
fruits.push('망고');
console.log(fruits);
// 배열안에 중복되는 값이 있을때 조건에 맞는 값의 첫번째에 해당하는 값을 만나면 그 index를 반환한다.
console.log(fruits.indexOf('망고'));
// 그렇기에 뒤에서 조건에 맞는 값을 찾고 싶을때는 lastIndexOf를 쓸때가 있다.
console.log(fruits.lastIndexOf('망고'));

