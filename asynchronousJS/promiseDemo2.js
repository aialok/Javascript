function fetchData(url)
{
        return new Promise(function process(resolve, response){
            console.log("Your data download is start");
            setTimeout(() => {
                    console.log("Data downloaded");
                     let x=" Success";
                     resolve(x);
            }, 8000);
            console.log("still downloading.....");
        })
}

x=fetchData("www.google.com");

console.log(x);