Stacks & Queues
===

#### ingredients to learn data structures:
1. learn the DS concept
  - draw it
  - create the API/operation methods
2. Build the DS
  - Pseudocode the implementation
  - code the data structure constructor
3. Utilize the Data Structure
  - put it to work
  - pair it with an algo if needed
4. Understand DS
  - what is time complexity
  - How can you optimize?

  ^ if you know all these things about a DS, you know a DS.

  #### Stacks
  LIFO - list item added into the stack will be the first one taken out. 

  * a stack is basically an array that can ONLY push() and pop().

  EX: [1,2,3] -> can only take of 3, 2, and then 1.

  example of this is a call stack. after a fn is done, we pop it off the call stack. 

  ###### Interface: stacks
  1. constructor function
    - storage
  2. methods
    - push(value) // adds value to the front, returns size of the stack
    - pop() // removes value from front, returns the value
    - size() // returns the size of the stack as an integer

NOTE: there is no linked list in JS. 

if we didnt have arrays, how would we store a stack? a variable!

```js
var Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function (val) {

};

Stack.prototype.pop = function () {

};

Stack.prototype.size = function () {

};

var myWeeklymenu = new Stack();

myWeeklymenu.push("RedBeans");
```

my completed version:
```js
var Stack = function() {
  this.storage = "";
  this.length = 0;
  this.lastValueLength = "";
};

Stack.prototype.push = function (val) {
  this.storage += `--${val}`;
  this.lastValueLength = val.length;
  this.length++;
  return this.lastValueLength;
};

Stack.prototype.pop = function () {
  let lastIndex = this.storage.length - (this.lastValueLength + 2);
  this.storage = this.storage.slice(0, lastIndex);
  this.length--;
  return this.storage;
};

Stack.prototype.size = function () {
  return this.length;
};

var myWeeklymenu = new Stack();

myWeeklymenu.push("RedBeans");
myWeeklymenu.push("Rice");
myWeeklymenu.pop();
myWeeklymenu.size();
```


#### Queues
enque = add
deque = subtract

first item added to the queue will be the first one taken out of the queue.
if something is taken off its taken from the front, when you put something on its added to the back.

interface: Queues
1. constructor fn
  - Storage
2. Methods
  - enqueue(value) //adds value to the back, returns the size
  - dequeue(value) //remove value from the front, returns value
  - size() //returns the size of the queue as an integer.

  NOTE: decorator differences = 
  - x++/ x-- = returns the number first, then increments/decrements
  - ++x/--x = we'll incremement, then return the number

EX: 
```js
var x = 4;
x++; //4 ->5 ->6 ->7 
++x; //5 ->6 ->7 ->8
```

NOTE: exercises for stacks and ques are in `stack-exercises.js` and `queue-exercises.js`.

also take a look at these variables:
```js
function Stack(capacity) {
  this._storage = {};
  this._length = 0;
  this._capacity = capacity;
}
```

JS has no such thing as private variables, so the `_` mark denotes it to other variables as,"hey this is my interface so do not modify it!!!"






