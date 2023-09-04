function a(){
var xi =100;
  function b(){

  console.log(xi)
  }
  // xi = 10;
  return b
}
 
 const z = a();  

console.log(z); // returning function

z(); //returning the value even through the function is closed.