// write a function to download data from url
// write a function to save that downloaded data in a file and return  the file name
// write a function to upload  the file to  written in previous step to  a newurl


function fetchData(url) {

    return new Promise((resolve, reject) => {
        console.log("Downloading data from", url);
        setTimeout(() => {
            console.log("Downloaded data successfully");
            let data = "Dummy data";
            resolve(data);
        }, 3000);
    })

}

function writeFile(data) {
    return new Promise((resolve, reject) => {
        console.log("Reading data file and saving into the file data:", data);
        setTimeout(() => {
            console.log("file saved successfully");
            let file = "dummy.txt";
            resolve(file);
        }, 4000);
    })
}

function uploadFile(file, newUrl) {
    return new Promise((resolve, reject) => {
        console.log("Uploading the file on new url", newUrl);
        setTimeout(() => {
            console.log("file uploaded successully");
            let response = "Success";
            resolve(response);
        }, 3000);
    })
}


let downloadedFetchData = fetchData("www.google.com");

downloadedFetchData.then((value) => {
    console.log("Download promise fullfilled");

    let fileWriting = writeFile(value);
    fileWriting.then((file) => {
        console.log("Write Promise fullfilled");

        let uploading = uploadFile(file, "www.drive.google.com");
        uploading.then((response) => {
            console.log("uploading promise fullfilled");
            console.log(response);
        })
    })
})


