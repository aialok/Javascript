function mapper(arr, fun)
{   
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
      let res= fun(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr=[1,2,3,4,5]
let x=mapper(arr, (v,i)=>{
    console.log(v*v, i)
    return v*v*v;
});

console.log(x,arr);

