// userInfo에 있는 ableSkill에 skill을 넣을 수 있는 함수는 userInfo안에 만들어보세요

let userInfo = {
  name:"sina",
  ableSkill:{},
  setAbleSkill : function (key) {
    this.ableSkill = {
      ...userInfo.ableSkill,
      ...userInfo.ableSkill = key // 마지막 인자값 호출
    }
  }
}

userInfo.setAbleSkill({"javascript":"10점"});
userInfo.setAbleSkill({"mysql":"8점"});



console.log(userInfo.ableSkill);

// userInfo.ableSkill
// { javascript: '10점' } => 이렇게 콘솔에 찍히면 됩니다.