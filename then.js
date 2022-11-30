function fetchData(url)
{
    return new Promise(function (resolve, reject){
        console.log("download started",url);
        setTimeout(function process(){
            let data = "dummy data";
            console.log("download finished");
            resolve(data);
        },4000);
    })
}

function writedata(data)
{
    return new Promise(function (resolve, reject){
        console.log("writing started",data);
        setTimeout(function process(){
            let filename = "result.txt";
            console.log("writing finished");
            resolve(filename);
        },3000);
    })
}

function upload(file,url)
{
    return new Promise(function(resolve,reject){
        console.log("uploading started at",url,"filename is :",file)
        setTimeout(function process(){
            let result = "SUCCESS";
            console.log("uploading completed");
            resolve(result);
        },5000)
    })
}

let downloadedData = fetchData("google.com");
downloadedData.then(function (value){
    console.log("downloaded data -",value);
    let writeddata = writedata(value);
    writeddata.then(function(value){
        console.log("writing completed",value);
        let uploaddata = upload()
    })
})