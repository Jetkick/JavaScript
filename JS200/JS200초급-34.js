
// JS 200제 함수 이해하기 (초급 34)

let greeting_expression = function(name) {
  return ('hi, ' + name);
}

function greeting_declaration(name) {
  console.log('hi, ' + name);
}

console.log(greeting_expression('chloe'))
greeting_declaration('chloe');