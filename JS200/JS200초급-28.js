
// JS 200제 객체 이해하기 1 (초급 28)

// 자료구조 객체 정리하기

let family = {
  'address' : 'Seoul',
  members : {},

  addFamily : function(age, name, role) {
    this.members[role] = { // this 메소드를 통해 family 객체 내부 속성에 접근이 가능.
      age : age,
      name : name
    };
  },

  getHeadcount : function() {
    return Object.keys(this.members).length;
  }

};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());

