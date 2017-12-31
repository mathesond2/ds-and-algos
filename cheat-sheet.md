# Stack
* data structure that stores data, data is added and removed from the back. think of a call stack.

Example
```js
var Stack = function() {
  this.storage = "";
  this.length = 0;
  this.lastValueLength = "";
};

Stack.prototype.push = function (val) {};
Stack.prototype.pop = function () {};
Stack.prototype.size = function () {};

var myWeeklymenu = new Stack();

myWeeklymenu.push("RedBeans");
myWeeklymenu.pop();
myWeeklymenu.size();
```

# Queue
* data structure to store data, data is added in the back and removed from the front

Example
```js
function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};

Queue.prototype.peek = function() {
  return this._storage[this._head];
}

Queue.prototype.count = function() {
  return this._tail - this._head;
};

var myQueue = new Queue(5);
myQueue.enqueue('hi');
myQueue.dequeue();

console.log(myQueue);
```

# Misc JS

#### Decorators
* `++x` incremements, then returns
* `x++` returns, then incremements

Example:
```js
var x = 4;
x++; //4 ->5 ->6 ->7 
++x; //5 ->6 ->7 ->8
```
#### Private Variables (`_`)
JS has no such thing as private variables, so the `_` mark denotes it to other variables as,"hey this is my interface so do not modify it!!!"
Example: `this_storage = {};`


# Recursion
* when a function calls itself until a base case is reached.

Example:
```js
var tracker = 0; 

var callMe = function() {
  tracker++;
  if(tracker === 3) {
    return 'loops!';
  }
  callMe();
};

console.log(callMe());
```

^ this works fine. however if we run it, we will not see `loops!` because that only exists inside the call stack. if we want that return statement, we have to add an additional return statement to break it out of the call stack:
```js
var tracker = 0; 

var callMe = function() {
  tracker++;
  if(tracker === 3) {
    return 'loops!';
  }
  return callMe();
};

console.log(callMe());
```
#### template for a recursive fn
1. identify base case(s)
2. identify recursive case(s)
3. return where appropriate. 
4. write procedures for each case that brings you closer to the base cases.

solid recursive example:
```js
var loopNTimes = function(n) {
  console.log('n equals ', n); // fn to execute
  
  if( n <= 1) { // base case
    return 'complete';
  }
  return loopNTimes(n-1); // caller and decrementer
};

loopNTimes(3);
```

another example,  `5 * 4 * 3 * 2 * 1`:
```js
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    result *= i; //1 * 2 = 2 | 2 * 3 = 6 | 6 * 4 = 24 | 24 * 5 = 120
  }

  return result;
}

console.log(computeFactorial(5));
```

# Time Complexity (Big O)
* What makes an algorithm fast? as your dataset grows, how much more work does your algo have to do? what determines that speed? Big O is a notation for determining that algorithm speed.

Example 1:
On kayak.com youre trying to sort hotels from lowest to highest price. you could do this by evaluating each hotel in the hotel list to every hotel in the list to find the price difference. 

you could represent this by making:
- a number of columns that is the length of the hotel list
- a number of rows that is the length of the hotel list

* The algorithm's speed would be considered 'n^2' because 'n' is the number of hotels, and its speed is whatever it is multiplied by whatever it is.

Example 2:
5 hotels? 5^2 = 25 operations to do. 
10 hotels? 10^2 = 100 operations to do

Example 3:
Take the same amount of hotels and try to find the min and the max cost, with 'min' and 'max' already given. So for these two values, in each of the hotels you have to check if the hotel is higher than the max and lower than the min. 

* The algorithm speed here is N * 2, because you have to check the min and max for every input.

10 hotels? N * 2 =  20 operations
20 hotels? N * 2 =  40 operations

we can also call this '2N'....'N' being the size of the dataset. 

###### Big O notation speeds
1. constant - O(1) = fastest
2. logarithmic - O(logn) (we dont talk about this, but a quick sort is an example of this)
3. linear - O(n)
--- anything above linear is considered a bad algo 
4. quadratic - O(n^2
5. exponential - O(k^n)

**NOTE: if you only have a small dataset, whether or not your algo is quadratic or constant or whatever doesnt really matter. its only when you have sets of data that are 1000s of items that you start to see its effect.**

##### Calculating Big O of JS methods
- .push() = O(1)
- .pop() = O(1) | it only removes one element, so its constant
- for(){} | O(n) | depending on the size (n) of the elements to loop over is how fast this will go

#### Calculating multiple expressions (loops, statements, etc) to obtain Big O speed
* you can calculate individual elements' big O notations, but what if they're together in a function? how can you tell its speed?
* REMEMBER: nested elements are multiplied, adjacent elements are added.

Example:
```js
 for(var i...){ // O(n)
   1 + 1 // O(1)
 }

 for(var i...){ // O(n) <-- when 2 operations are nested we multiply them, so O(n) * O(n)
  for(var i...){ // O(n)
    3 + 3 // O(1)
    5 + 6 // O(1) <-- when 2 operations are next to each other we add them, so O(1) + O(1)
  }
 }

 // ^ this is O(n^2) * O(2)
 //we can then trim it to be O(n^2) because we dont care about the constant time.
```

* remember, you can chop off faster speeds (such as O(1)) because we only care about the slowest speed. 

##### Complexity of Common Operations
* O(1) - running a statement (1+1)
* O(1) - value look-up on an array,object,variable.
* O(logn) - loop that cuts problem in half in every iteration
* O(n) - looping through the values of an array
* O(n^2) - double nested loops
* O(n^3) - triple nested loops


# Bubble Sort
* repeatedly swaps adjacent elements that are out of order. higher values 'bubble up' to the end of the data structure. 
* think of that hungarian dance.

#### Pseudocode: bubble sort
```js
function bubbleSort(list) {
  // for k, loop through 1 to n-1
    //for i loop 0 to n-2
      //if A[i] is greater than A[i + 1]
        // swap A[i] with A[i + 1]
}
```
* a bubble sort's Big O speed is O(n^2) because it is a loop with in a loop...`O(n) * O(n)`


# Selection Sort
* = selects the smallest element in an array, inserts it into a new array. 
```js
[1,6,8,2,5];

//new array
[1,2,5,6,8];
```
* Selection sort can also sort in a single array, not needing an additional array to insert to.

Example:
```js
[1,2,5,6,8]; //this selects the largest element in the array, swaps it to the end of the array. 
```

**NOTE: NEED EXAMPLES FOR THIS...THIS IS A WEAK SPOT**

# Insertion Sort
* = sorts, then inserts it into a new array. 
**NOTE: NEED EXAMPLES FOR THIS...THIS IS A WEAK SPOT**


# merge sort
Divide and conquer
0. recognize the base case
1. divide: break down the problem during each call
2. conquer: do work on each subset
3. combine: solutions

^ merge sort does this.

#### Concept: merging lists
* The merge step takes two sorted lists and merges them into one sorted list:

```js
var arr = [3,27,38,43];
var arr2 = [9,10, 82];

var mergedArr = [3,9,10,27,38,43,82];
```


A Merge sort has 2 functions:
  * function 1: break down array into single-value arrays
  * function 2 (inside function 1): combine the single-value arrays into one array

#### function 1: breaking down
**NOTE: this function contains function 2**

```js
function mergeSort(arr) {
  check if arr.length <= 1, and if so return the array

  let L = arr.slice(0, arr.length/2);
  let R = arr.slice(arr.length/2);

  let Lsorted = mergeSort(L);
  let Rsorted = mergeSort(R);

  return mergeArrays(Lsorted, Rsorted);
}
```

#### function 2: combining values
```js
merge(L,R)
  Rpointer = 0
  Lpointer = 0
  outputArray = []

  while(output array length is less than (L.length +  R.Length)){
    if Lpointer = L.length
      outputArray = outputArray.concat(R.slice(Rpointer));...take the rest of 'R' from its 'Rpointer' index, slice it off and add it to the end outputArray.
    else if Rpointer = R.length
      ^ do the same as above but slice from L and add to output array

    else if L[Lpointer] > R[Rpointer]
      push R[Rpointer] value to output array and Rpointer++
    else
      push L[Lpointer] value to output array and Lpointer++
    }
  
  when you're done with all that, return the outputArray
```


after dividing the array into single-value subarrays, the merging starts, based on comparison of elements:

[4,3,5,7,1] becomes:

[4],[3],[5],[7],[1]
so we then begin to evaluate based on the neighbors themselves:

4 > 3? yep so combine like: [3,4]

[3,4] [5,7] [1]
[3,4,5,7] [1]

[1,3,4,5,7]


# Quick Sort
* we only work with one array (not 2 like merge sort). all the action happens within the partitioning/splitting of the array.

steps
===
1. take the last value in the array, called the 'pivot'.
2. we'll partition the array using the pivot: values less than the pivot go before and values greater than the pivot go after.
3. recursively apply steps 1 & 2 to subarrays on either side of the pivot. 


the goal is to move each pivot to its rightful place in the array. we find that place using a 'pivot location'.

3 functions
===
1. quicksort()

2. partition() - takes the array, the 'lo' argument from where to begin iterating, and the 'hi' value from when to start iterating. creates both 'pivot' and 'pivotLocation' variables, and iterates through every value in the array, trying to see if the value is <= the pivot, and if so, swap the values between the pivotLocation's index and the current index. then increment the pivot location.

at the end of this iteration, you then finally swap the pivot's value with the pivotLocation's value.

3. swap() - helper fn, does the value swap out and returns the array


 when the pivot finally has its final resting place and after having this single value of truth in the middle of your array, you can begin to recursively do the same thing to both left and right sides of the array. 

 