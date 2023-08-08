 function test(){

    for(var i=0;i<3;i++)
    {
       setTimeout(()=>{
            console.log(`i : ${i}`);
        },i*1000);
    }


}

 test();


function test2(){

    for(let i=0;i<3;i++)
    {
        setTimeout(()=>{
            console.log(`i : ${i}`);
        },i*1000);
    }



}


test2();