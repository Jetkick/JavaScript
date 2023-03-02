
const date = ["얼리슬로스_20230202","얼리슬로스_20230101","얼리슬로스_20230102","얼리슬로스_20230103","얼리슬로스_20230105","얼리슬로스_20230307"]
const movie = ["명량","극한직업","신과함께","국제시장","어벤져스","겨울왕국2"]

// map slice

function soultion (date, movie) {
  const getDate = date.map((getDate, index) => {
    return movie[index] + getDate.slice(5)
  })
  console.log(getDate);
  return getDate
}

function soultion2 (date, movie) {
  const getDate = date.map((getDate, index) => {
    console.log(movie[index] + getDate.slice(5));
  })
}


soultion(date, movie);
soultion2(date, movie)
// 두 배열을 활용해서 아래처럼 나오게 함수를 만들어주세요.
// 1.
// [ '명량_20230202', '극한직업_20230101', '신과함께_20230102', '국제시장_20230103', '어벤져스_20230105', '겨울왕국2_20230307' ]

// 이렇게 리턴시켜주세요.

// 2.
// '명량_20230202'
// '극한직업_20230101'
// '신과함께_20230102'
// '국제시장_20230103'
// '어벤져스_20230105'
// '겨울왕국2_20230307'

// 위 처럼나오게 console.log를 찍어주세요.