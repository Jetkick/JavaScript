/*
슬로스는 과일 가게를 운영하고 있습니다. 
슬로스의 과일 가게에는 바나나, 사과, 자두가 있고 각 과일의 가격은 1500원, 1000원, 1200원입니다.
슬로스를 도와 과일 이름을 입력하면, 해당 과일이 가게에 있는지 없는지, 있다면 가격을 알려주는 함수 solution을 완성해주세요.

입력 예시 1) 
"귤"

출력 예시 1)
귤 상품이 없습니다.

입력 예시 2) 
"바나나"

출력 예시 2)
바나나 상품은 1500원 입니다.
*/

const solution = str => {

  const fruit = {
    banana : '바나나',
    plum : '자두',
    tangerine : '귤',
    mango : '망고'
  };

  const banana = fruit.banana;
  const plum = fruit.plum;
  const tangerine = fruit.tangerine;
  const mango = fruit.mango;

  
  // const banana = fruit.name === '바나나'
  // const plum = item.filter((plum) => fruit['자두']);
  // const tangerine = item.find(element.name === '귤');
  // const mango = item.find(element.name === '망고');

  if (banana === str) {
    console.log('바나나 상품은 5만원')
  } else if (plum === str) {
    console.log('자두가 안보임')
  } else if (tangerine === str) {
    console.log('귤 상품이 없습니다')
  } else if (mango === str) {
    console.log('망고는 망고')
  } else {
    console.log('사장님 과일이 안보입니다.')
  }
 
  // if(str.banana ==='바나나') {
  //   const banana = str.banana
  //   console.log('바나나 상품은 1500원입니다.')
  //   return banana
  // } else if (str.plum ==='자두') {
  //   const plum = str.plum
  //   console.log('바나나 상품은 1200원입니다.')
  //   return plum;
  // } else if (str.tangerine === '귤') {
  //   const tangerine = str.tangerine
  //   console.log('귤 상품이 없습니다.')
  //   return tangerine
  // } else if ('망고') {
  //   const mango = str.mango
  //   console.log('망고 상품이 없습니다.')
  //   return mango
  // } else {
  //   console.log('찾는 과일이 없습니다.')
  // }

  return str
}

console.log(solution('바나나')) // 바나나 상품은 1500원입니다.
console.log(solution('자두')) // 바나나 상품은 1200원입니다.
console.log(solution('귤')) // 귤 상품이 없습니다.
console.log(solution('망고')) // 망고 상품이 없습니다.