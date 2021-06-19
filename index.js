let a = 10;
let b = 25;
let n = a + b;

function add(a,b) {
    return a += b
    }
    console.log(add(a,b));
    


    function subtract(a,b) {
        return a -= b
    }
    console.log(subtract(a,b));



    function multiply(a,b) {
        return a *= b
    }
    console.log(multiply(a,b));

    
    function divide(a,b) {
        return a /= b
    }
    console.log(divide(a,b));


    function increment(n) {
        return n += 1;
    }
    console.log(increment(n));


    function decrement(n) {
        return n -= 1;
    }
    console.log(decrement(n));

    


    function makeInt(n) {
        return parseInt(n, 10); 
    }
   console.log(makeInt(2));



    function preserveDecimal(n) {
       return parseFloat(n); 
    }
console.log(preserveDecimal("80.123999"));

