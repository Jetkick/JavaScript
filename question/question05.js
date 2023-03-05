
// 배열함수를 이용해서 다음 배열에서 index 가 짝수인 것만 골라서 곱해봅시다. 1부터 곱해 나갑시다.
// ex) [1,2,3,4,5] 1 * 1 * 3 * 5 = 15
// ex) [2,7,3,7] 1 * 2 * 3 = 6

const solution1 = (arr) => {
  const array = arr.reduce((acmlt, value, index) => {
  if (index % 2 === 0) {
    return acmlt * value
  }
  return acmlt
  }, 1);
  // console.log(array);
  return array
};
solution1([1,2,3,4,5]) // -> 15
solution1([2,7,3,7]) // -> 6


//----------------------------------------------------------------------------------------------------------------
//아래 engineers에서 lang이 javascript인 사람을 필터해서 age가 많은 순에서 적은 순으로 정렬하세요.
const engineers = [
  {
    id: 1,
    lang: "java",
    age: 23,
  },
  { id: 2, lang: "javascript", age: 31 },
  { id: 3, lang: "python", age: 15 },
  { id: 4, lang: "java", age: 44 },
  {
    id: 5,
    lang: "java",
    age: 47,
  },
  { id: 6, lang: "javascript", age: 35 },
  { id: 7, lang: "python", age: 21 },
  { id: 8, lang: "java", age: 29 },
];

  const solution2 = (engineers) => {
    const answer = engineers.filter(getData => {
      getData = getData.lang == 'javascript'
      return getData
    })
    // console.log(answer.reverse());
    return answer.reverse();
  };
solution2(engineers)

  // [
  //   { id: 6, lang: 'javascript', age: 35 },
  //   { id: 2, lang: 'javascript', age: 31 }
  // ]
//----------------------------------------------------------------------------------------------------------------


//아래 credit은 000원이 생략되어 있습니다. 
// credit에 접근해서 ,000 을 추가해서 [ '30,000', '70,000', '120,000' ] 이렇게 return해주세요
const example = {
  id:1,
  name:'john',
  credit:{
    bank:30,
    tel:70,
    homeService:120
  }
}
const solution3 = (example) => {
  const getCredit = example.credit;
  const getData = Object.values(getCredit);
  const result = getData.map(credit => {
    return credit + ',000'
  })

  console.log(result);
  return result
}
solution3(example)
//solution3(example) [ '30,000', '70,000', '120,000' ]