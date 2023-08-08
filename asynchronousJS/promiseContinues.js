console.log("Start of the file");

setTimeout(() => {
    console.log("Task 1 is done");
}, );

for(let i=0;i<1000000000; i++)
{
    //some task
}

Promise.resolve("Alok's Promise")
.then((value)=>{
    console.log("Whose promise first ?", value);
    setTimeout(() => {
        console.log("Whose promise ?", value);
    }, );
})
for(let i=0;i<1000000000; i++)
{
    //some task
}
 



setTimeout(() => {
    console.log("Task 2 is done");
},2000 );

console.log("End of file");

