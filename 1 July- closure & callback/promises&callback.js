 async function todo(task){
    setTimeout(()=>{
        console.log("completed", task);
        console.trace();
    }, 2000)
    task="Hw";
};

console.log("Start");
todo("assignments");
console.log("Ending");