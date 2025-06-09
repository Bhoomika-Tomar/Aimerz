const display = () =>{
    console.log("hello");
    return 0;
    
}
console.log(display());

//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
            
    }
    
}
outer();
//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
            
    }

    return inner
    
}
outer()();
//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
        
        
    }

    return inner
    
    
}

const aa = outer();
aa();
//
console.log(a1);

const a1 = 9;

show();
function show() {
    console.log("hell0");
        
}