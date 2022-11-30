function fetch(url)
{
    console.log("starting fetch");
    return new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("completed",url);
        let data = "dummy data";
        resolve(data);
    }, 4000);
    console.log("outside settimeout");
    });
}
let x = fetch("google.com");
console.log(x);