//1.Pure Function
function addPure(a, b){
    return a + b;
}
// let add = addPure(2, 5);
//console.log("Pure function", addPure(2, 5));

//2.Avoid Side Effect
const b = 7;//global variable

function addSideEffect(a){
    const c = 10; //local variable
    return a + b + c;
}

let add = addSideEffect(5);
console.log(add);