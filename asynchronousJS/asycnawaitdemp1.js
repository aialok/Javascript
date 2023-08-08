function fun(){
    return new Promise((res, rej)=>{
        res(1);
        console.log("promise resolved");
    })  
}



console.log("Start");
x=fun();
x.then((data)=>{
    console.log(data);
})
console.log(x);

console.log("End");