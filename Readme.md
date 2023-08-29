# Namaste javascript

## How Javascript works

_Everthing in javascript happens inside an **Execution Context**_

Execution is a big box or container that is stored inside it.

| Memory    | Code                 |
| --------- | -------------------- |
| key:value | ...(name:"somethng") |
| a:10      | .....                |
| fn:{...}  | .....                |

Memory componets is also known as variable Enivornment.

**code** is placed execution one line of a code at a time. This code is known as Thread of Execution

**Javascript is a synchronous single-threaded language**

---

## How Javascript code is executed and call stack

```javascript
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
```

| Memory      | code                                                |
| ----------- | --------------------------------------------------- |
| n:2         | local memory created for square2 after that deleted |
| Square:{}   |                                                     |
| square2:4   | local memory created for square4 after that deleted |
| square4 :16 |                                                     |

---

## Hoisting

Hoisting is a phenomenon in javascript.By the default it access even before intialized it . (by default to the top of the scope)

**Exper:-** When we create a variable and declare it. it is stored in a execution context before intialization is called hoisting. if we dont decalre but want to call the variable it shows reference error coz, it is not stored in execution context.
```javascript

getName();
console.log(x); // undefined
console.log(getName);

function getName(){

  console.log("Namste javascript")
}
```

**Using arrow function**
```javascript

getName; // undefined-- because it is stored as a variable
console.log(x); // undefined
console.log(getName);

var getName = ()=>{

  console.log("Namste javascript")
}
```

**Using function Expresion**

```javascript

getName ; // undefined -- because it is stored as a variable
console.log(x); // undefined
console.log(getName);

var getName = function () {

  console.log("Namste javascript")
}
```
---

**How functions work in js & variable enivornment**

```javascript
var x = 1;
a();
b();
console.log(x);

function a(){
  var x =10;
  console.log(x)
}

function b(){
  var x =100;
  console.log(x)
}

```

In global Execution context

* on line 1 - x is undefined ;
* on line 2 - x is 1 and a() pushed into call-stack . a() will create a new execution context in global memory
here in the local memory on first line x will be undefined . in second line x declared to 10 and third line it will go to  console and print x =10; after that a() is poped from call stack, so execution context will be deleted.
* on line 3 - b() is pushed into call-stack . b() will create a new execution context in global memory. here in the local memory first line x will be undefined . In second line x declared to 100 . and third line it will go to console and print x = 100 after that b() is poped from call stack, so execution context will be deleted

* on line- 4  on global it prints console.log(x) // 1

Note:- after console of everything execution context and call stacks are deleted.
**result of function**
10
100
1

---
