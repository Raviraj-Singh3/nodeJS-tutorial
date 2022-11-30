function fun(x,fn)
{
    for(i=0; i<x; i++)
    {
        console.log(i);
    }
    fn();
}
fun(10, function fn(){
    console.log("fn function");
});