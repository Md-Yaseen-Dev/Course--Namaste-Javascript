// // how functions work in js
// var x = 1;
// a();
// b();
// console.log(x);


// function a(){
//     var x =10;
//     console.log(x);
// }

// function b(){
//     var x =100;
//     console.log(x)
// }


// // ---shortest js program (empty file)------


// closure is a function in a lexical behaviour it remembers even the function is outside the function (or) the function is closed


function outer(){

    var a = 10;
     function inner(){
     console.log(a)
    }
    a=100;
    return inner;
}

const close = outer();
console.log(close); // see here the function is closed.

// by calling close variable we can access inner function. as shown below:

close(); // it returns the refernce of a i.e 100. 

