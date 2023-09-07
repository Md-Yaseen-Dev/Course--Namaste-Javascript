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

getName(); // Namste javascript
console.log(x); // not defined
console.log(getName);

function getName(){

  console.log("Namste javascript")
}
```

**Using arrow function**
```javascript

getName; // undefined-- because it is stored as a variable
console.log(x); // not defined
console.log(getName);

var getName = ()=>{

  console.log("Namste javascript")
}
```

**Using function Expresion**

```javascript

getName ; // undefined -- because it is stored as a variable
console.log(x); // not defined
console.log(getName);

var getName = function () {

  console.log("Namste javascript")
}
```
---

**How functions work in js & variable enivornment**

```javascript
var x = 1;
a(); //  10;
b(); // 100;
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


## Shortest Js Program window & this keyword

* An empty js file is known as shortest js.

* In these empty js file when we do debugging, the global memory is working, it sounds weired right.

* here in global memory - window object is automatically is stored in stack. 

* And here this defines the window-object.


```javascript
var a ="0";
function b(){
var x =10;
console.log(x)
}
```

- If we create variable inside the function. just like x . it is not in global space.

Note:- Do you want to Know? how it is working? write window in console.


---

## Undefined vs Not defined in JS.

```javascript
var a = 7 ;
console.log(x);
```
we created a variable . so in global memory it is allocated before we call the variable.

- Go to debugger and check a is undefined. 

- "a" will be reserved memory. when you try to console then it shows result as  undefined.


-  Here "x" is not allocated to memory , so it is not defined. so console shows error(refernce error)

**Note undefined !== Empty**


```javascript
var a ;

if(a === undefined){

  console.log("this is undefined")
}
else{
  console.log("this is not undefined")
}


```

---

## The Scope Chain, scope and lexical enivornment.

**Lexical Enivornment**:- lexical enivornment is created when execution context is created. lexical enivornment is nothing but which we can access refernce of parent scope or global scope.
**For global scope lexical enivornment will be null. coz of no parent**

In simple words:- lexical enivornment is a local memory along with lexical enivornment parent.


```javascript
function a(){
  console.log(b);
}
let b = 10;
a();
```

**Scope : -** scope means where we can access function or variable in our code 


**scope chain :-** The mechanism of lexical enivornment is known as scope chain.

---


## let and const in js Temporal dead zone.

Let and const are two block scoped variable. They store in the different memory location known as block scope or script.


**we think that let and const doesn't hoist ?** It's absoultly wrong . they hoist in differnent memory location. but they dont show in console due to Temporal dead zone (tdz error)


**Temporal dead Zone :-** tdz is nothing but time between hoisting to intalization.


**let and const are hoisted but it get error because of temporal dead zone. it will stop to access until it is intalizee**

**Note:-**

- let cannot be redecalre but we can reassign.
- const cannot be redecalre and reassign.

---


## Closures


**closure:-** closure is a function in lexcial enivornment and remembers even the function is executed outside the lexical scope.


```javascript
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

```


**Uses of Closures**

- modules design pattern
- currying
- functions like once
- memorize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...

**Disadvantages of closures**

- In closures overconsumption of memory
- It ensures lot or memory space.
- And sometimes the variables collected with garbage values.
---

## setTimeOut