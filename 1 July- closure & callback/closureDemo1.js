function a(name){
    return function b(){
        console.log(name);
    }
}

let x=a("Alok");
console.log(x);
x();