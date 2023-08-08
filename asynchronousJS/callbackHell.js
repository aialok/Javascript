 function fetchData(url, fn){
    console.log("starting download from", url);
    return setTimeout(function process(){
        console.log("Download completed");
        let response ="Dummy Data";
        fn(response);
    },3000)
}

function writeFile(data, fn)
{
    console.log("Started writing the content:",  data);
    setTimeout(function process(){
        console.log("Writing completed");
        let response="Student.txt";
        fn(response);
    },3000)
}



function uploadFile(filename, newUrl, fn)
{
    console.log("Upload Started");
    setTimeout(function process(){
        console.log(filename, "uploaded to", newUrl );
        let response= "SUCCESS";
         fn(response);
    }, 3000);
}




fetchData("www.google.com", function fetchingCallback(value){
        console.log("Fetch data is", value);
        writeFile(value, function writeCallback(file){
                console.log("Uploaded file is", file);

                uploadFile(file, "www.unacademy.com", function uploadingCallback(filename){
                    console.log(filename);
                })

        })
} )