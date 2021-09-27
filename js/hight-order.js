function calculate(a = null, b = null, operator = null) {
  return operator(a, b);
}

function add(x = null, y = null) {
  return x + y;
}
function sub(x = null, y = null) {
  return x - y;
}

console.log(calculate(5, 10, add)); //15
console.log(calculate(20, 15, sub)); //5
