
// JS 200제 객체 이해하기 2 (초급 29)

let family = {
  'address' : 'Seoul',
  members : {},
  addFamily : function(age, name, role) {
    this.members[role] = {
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

// console.log(family.members);

// ------

let printMembers = function() {
  let members = family.members;
  for (role in members) { // for - in 반복문
    console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
  }
};
printMembers();

let members = family.members;
members['nephew'] = {age : 3, name : 'hyun'};
members.niece = {age : 5, name : 'lyn'};
delete members.aunt;
delete members['dog'];
printMembers();


// ex 1 )

let object = {
  'monster' : '고카페인',
  drink : 'monster',
  coffee : {},
  addcoffee : function(country, kind, coffee) {
    this.coffee[country] = {
      kind : kind,
      coffee : coffee
    }
  },
  getHeadcoffee : function() {
    return Object.keys(this.coffee).length;
  }
};

object.addcoffee('santos', '원두', '마일드한 커피')
object.addcoffee('blueMountain', '원두', '비쌈')
object.addcoffee('guatemala', '원두', '쌈')

let getCoffee = function() {
  let coffee = object.coffee;
  for (country in coffee) {
    console.log('one => ' + country + ', kind => ' + coffee[country].kind + ', age => ' + coffee[country].coffee);
  }
};
getCoffee();

let coffee = object.coffee;
coffee['맥심 커피믹스'] = {kind : '믹스', coffee : '설탕 듬뿍'};
coffee.santos =  {two : '믹스', three : '인기 없음'};
delete coffee.santos;
delete coffee['guatemala'];
getCoffee();
