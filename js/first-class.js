//1.assigned
const sayAssign = function (){
    return(`Hello `);
}

function greeting(sayHi, name){
    console.log(sayHi(),name);
}

greeting(sayAssign,"Mark");