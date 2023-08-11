 export function linearSearch(arr, x)
 {
    for(let i=0;i<arr.length;i++)
    {
        if(x===arr[i])
        {
            return i;
            
        }
    }

    return NaN;
 }


export function binarySearch(arr,x)
{
    //some logic
}

    

// module.exports = {
//     linear: linearSearch,
//     binary : binarySearch
// }