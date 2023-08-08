function ytDownloader(url)
{
    return new Promise((res,rej)=>{
        console.log("Your youtube video is downloading with url:",url );
        setTimeout(() => {
                console.log("downloading......");
                let file=url+".ytDownloader";
                res(file);
        }, 3000);

    })
}

function uploadFile(file, newUrl) {
    return new Promise((resolve, reject) => {
        console.log("Uploading the file on new url", newUrl);

        setTimeout(() => {
            console.log("file uploaded successully ", file);
            let response = "Success";
            resolve(response);
        }, 5000);
    })
}

async function processing()
{
    let downloadFile=await ytDownloader("https://www.youtube.com/watch?v=yjd-LXVRqDU");
    console.log("File Downloaded Successfully");
    let fileUpload= await uploadFile(downloadFile,"www.youtubeUpload.com");
    console.log("File uploade:", fileUpload);
}

processing();