function fetchfun(url,fn)
{
    console.log("download started", url);
    setTimeout(function process(){
        console.log("download completed");
        let response = "dummy data";
        fn(response);
    },3000);
    
    
}
let res = fetchfun("google.com",function callback(response){
    console.log("downloaded content is : ",response);
    
});
console.log("end of file");

