const a = prompt("Please enter: ");
let x = parseInt(a);

function myHello(x=10) {
    let z = x + 10;
    console.log(z);
    document.getElementById("demo").innerHTML = `${z}`;
    document.writeln(`${z}`);
}
myHello(x);