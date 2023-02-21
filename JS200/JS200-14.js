
// JS 200제 반복문 배우기 - for in (입문 14)

const store = {snack : 1000, flower : 5000, beverage : 2000};

for (let item in store) {
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + '는 가격이 ' + store[item] + ' 입니다.');

}

//ex 1

const a = {one : 100, two : 200, three : 300};

for (let b in a) {
  if (!a.hasOwnProperty(b)) continue;

  // console.log(b + '는 가격이 ' + a[b] + ' 입니다.');
}

// ex 2

const b = {one : 100, two : 200};

for (let c in b) {
  if (b.hasOwnProperty(c)) {
    // console.log('this is b(' + c + ') for sure. value : ' + b[c]);
  } else {
    console.log(c);
  }
};

// ex 3

const c = {one : 100, two : 200};

for (let result in c) {
  if (c.hasOwnProperty(result)) {
    console.log('play JavaScript ' + result + ' value : ' + c[result] );
  } else {
    console.log(c);
  }
}

// ex 4

const d = [
  {one : 100, two : 200},
  {three : 300}
];

for (let item in d) {
  if (d.shift(item).hasOwnProperty(item)) {
    console.log('key ' + item + ' value : ' + d[item]);
  } else {
    console.log(d);
  }
}

// 배열에 담긴 객체 값을 추출하는 방법은?