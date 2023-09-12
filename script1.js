// // // how functions work in js
// // var x = 1;
// // a();
// // b();
// // console.log(x);


// // function a(){
// //     var x =10;
// //     console.log(x);
// // }

// // function b(){
// //     var x =100;
// //     console.log(x)
// // }


// // // ---shortest js program (empty file)------

// // ---------------------------------------------------------------------------------

// // closure is a function in a lexical behaviour it remembers even the function is outside the function (or) the function is closed


// function outer(){

//     var a = 10;
//      function inner(){
//      console.log(a)
//     }
//     a=100;
//     return inner;
// }

// const close = outer();
// console.log(close); // see here the function is closed.

// // by calling close variable we can access inner function. as shown below:

// close(); // it returns the refernce of a i.e 100. 


/*--- uses of closures:-

- modules design pattern
- currying
- functions like once
- memorize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...

*/

// setTimeOut



function y(){

    for(let i=1;i <5;i++){
     
    setTimeout(function(){
        console.log(i)
    }, i * 100)
}
}

y(); // after 100 millsec it is printing i =5 because of closures the function of lexical behaviour i refernce will be 5 so here it is printing 5 for every loop. The loop is working through values but it returns their refernces of i and they dont change when it iterates.

// Note when u use let variable it will run 1,2,3,4,5. because let is a block scope where it iterates the loop with a new reference.

function x(){

    for(var i=1;i <=10;i++){
        // function closure(a){
    setTimeout(function(){
        console.log(i)
    }, i * 1000)
}
// closure(i)
}
// }

x(); // after 1 sec it will print.