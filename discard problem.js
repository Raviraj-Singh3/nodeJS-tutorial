var scope = "global scope";
function checkscope()
{
    var scope = "local scope";
    //console.log(scope);
    
    function f()
    
    {
        console.log(scope);
        return scope;
    }
    
    //return f;
    f();
}
checkscope();
//console.log(scope);