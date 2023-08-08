function fetchData(url){
     return new Promise((res,rej)=>{
        console.log("Starting download from", url);
        setTimeout(()=>{
            console.log("Download completed");
            let response=" GTA V Downloaded";
            res(response);
     },3000);
     })
}

let x=fetchData("www.apunkaGames.com")

// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })

console.log(x);
setTimeout(()=>{
    console.log(x);
},4000);
