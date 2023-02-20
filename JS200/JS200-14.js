
// JS 200제 반복문 배우기 - for in (입문 14)

const store = {snack : 1000, flower : 5000, beverage : 2000};

for (let item in store) {
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + '는 가격이 ' + store[item] + ' 입니다.'); // 

}