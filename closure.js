function todo(task)
{
    setTimeout(function (){
        console.log("completed ", task)
    },2000);
}
console.log("starting");
todo("assignment");
console.log("stop");

// setInterval(function() {
//     console.log("interval")
// }, 2000);