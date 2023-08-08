function fun()
{
    return new Promise(function process(resolve, reject){
        console.log("inside the promise");
        for(let i=0;i<10000000000;i++)
        {

        }
        resolve("Promise Resolved Successfully");
    })
}

y=fun();

console.log(y);

