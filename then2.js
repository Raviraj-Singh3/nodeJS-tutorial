function fetchData(url)
{
    return new Promise(function (resolve, reject){
        console.log("download started",url);
        setTimeout(function process(){
            let data = "dummy data";
            console.log("download finished");
            resolve(data);
        },3000);
    })
}

function writedata(data)
{
    return new Promise(function (resolve, reject){
        console.log("writing started",data);
        setTimeout(function process(){
            let filename = "result.txt";
            resolve(filename);
            console.log("writing finished",filename);
        },4000);
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
downloadedData
.then(function processDownload (value){
    console.log("downloaded data -",value); 
    return value;
})
.then(function processWrite(value){
    return writedata(value);
})
.then(function processUpload(value){
    return upload(value,"google.com");
})
.then(function proceed(){
    console.log("done");
})