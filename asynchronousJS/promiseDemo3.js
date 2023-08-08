function weatherAPI(city)
{
    return new Promise((resolved, reject)=>{
        console.log("Your weather data is fetching from server....");
        setTimeout(() => {
            console.log("Today it will be cloudy in", city);
        }, 2000);
        setTimeout(() => {
            console.log("Its very good day for picnic");
            let temp="37.5c";

            resolved([temp, city]);
        }, 5000);
    })
}


weatherAPI("Ranchi")
    .then((data=>{
        console.log("Temperature in", data[1],"is", data[0]);
    }))

    .catch((err)=>{
        console.log(err);
    })