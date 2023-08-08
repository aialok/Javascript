const num=[1,2,3,4,5];

function factorial(n)
{
    return  n<=1? 1: n*factorial(n-1);
}

let a=num.map(factorial);
