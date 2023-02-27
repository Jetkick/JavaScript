// userInfo에 있는 ableSkill에 skill을 넣을 수 있는 함수는 userInfo안에 만들어보세요

const userInfo = {
name:"sina",
ableSkill:{},
setAbleSkill : function () {
  this.ableSkill = {
    JavaScript : '10점'
  }
}
}
userInfo.setAbleSkill();

console.log(userInfo.ableSkill);

const sina = userInfo.ableSkill;
console.log(Object
  .values(sina)
  .toString()
  );

  // userInfo.setAbleSkill({
// "javascript":"10점"
// })
// userInfo.ableSkill
// { javascript: '10점' } => 이렇게 콘솔에 찍히면 됩니다.