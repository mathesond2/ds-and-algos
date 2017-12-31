# Data Structures & Algorithms
This is an **ongoing** project of self-study, consisting of notes and coursework from the Front End Masters course "Data Structures and Algorithms in JavaScript", in addition to helpful miscellaneous resources and exercises found elsewhere on the web.

<details>
<summary>General</summary>
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

#### whats a data structure anyway? 
* a way of organizing data, a schema. a container for data that fits specific needs. 

* so much data out there, we need a way to structure it out. as more data is accumulated, you need a way to 
structure it out.
</details>

<details>
<summary>Stacks</summary>
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
</details>

<details>
<summary>Queues</summary>
enque = add
deque = subtract

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
</details>




<details>
<summary>Recursion</summary>
recursion = when a function calls itself.

```js
var callMe = function() {
  callMe();
  callMe();
  callMe('anytime');
};
```

### Recursive Functions
- why we do this? elegant solutions to keep code DRY.

 lets take a look at the above example:
```js
var callMe = function() {
  callMe();
  callMe();
  callMe('anytime');
};

callMe();
```

lets see what actually happens:
```js
var callMe = function() {  //1 first this happens
  callMe(); // 2.then this happens
  callMe();
  callMe('anytime');
};

var callMe = function() {  //2.
  callMe(); // 3.then this happens
  callMe();
  callMe('anytime');
};

var callMe = function() {  //3.
  callMe(); // 4.then this happens
  callMe();
  callMe('anytime');
};
```

as we see ^, we're in an infinite loop between the first 2 fns, so `callMe()` and `callMe('anytime)` never occur.

how do we stop it from looping? give it a return condition:

```js
var tracker = 0; 

var callMe = function() {
  tracker++;
  if(tracker === 3) {
    return 'loops!';
  }
  callMe('anytime');
};

callMe();
```

^ now as we'll see, this works, it indeed breaks out of the statement once 'tracker' becomes 3. however, the function returns undefined. we wanted the string 'loops!' to return...what gives? the issue is that since we are calling `callMe('anytime')` inside the function `callMe()`, we need to give ANOTHER return statement in order for the value to be passed UP THE STACK.
EX:
```js
var tracker = 0; 

var callMe = function() {
  tracker++;
  if(tracker === 3) {
    return 'loops!';
  }
  return callMe('anytime');
};

callMe();
```

#### template for a recursive fn
1. identify base case(s)
2. identify recursive case(s)
3. return where appropriate. 
4. write procedures for each case that brings you closer to the base cases.

EX: 
```js
var callMyself = function() {
  if(){
    //base case
    return;
  } else {
    //recursive case
    callMyself();
  }

  return;
};
```


One more example:
```js
var loopNTimes = function(n) {
  console.log('n equals ', n);
  
  if( n <= 1) {
    return 'complete';
  }
  return loopNTimes(n-1);
};

loopNTimes(3);
```

output is:
```js
n equals  3
n equals  2
n equals  1
"complete"
```

recursive analogy: recursion throws a snowball at the top of the hill, it snowballs until it reaches the bottom of the hill, then goes all the way back to the top.

#### Factorial with Loop

whats a factorial? `6!` = `6 * 5 * 4 * 3 * 2 * 1`
^ classic example of recursion.

another example:
```js
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}
```

if we call computeFactorial(5), the loop will run:

```js
result *= 2;
result *= 3;
result *= 4;
result *= 5;
```

in this case, `num` is our base case, this is when the return statement will occur. 

one thing I've noticed is a flaw in my own thinking is that I thought that when a base case is reached in a recursive function, the return statement simply breaks us out of the function and returns the statement and then things are over. that is not true, what happens when the base case is reached is the return statement retuns something and then we go from the top of the stack to the bottom of it, adding the new values to calculate whatever it is we're trying to calculate,  returning that calculation to the next function in the stack and popping the current function off the stack and so forth until we hit the beginning of the stack......using the snowball analogy, this makes total sense. 

we created a stack of functions until the base case is met, and then once that base case is met, we unwind the stack function by function, calculating values and popping off functions one by one until we get to the bottom.

Recursion vs. loops
- loops are more performant than recursion in JS

##### Wrapper function
* this is when you have a recursive function inside of a function:
```js
function runRecursiveLoop(start, end) {
  function recurse(i){
    console.log(i);
    if(i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}
```

NOTE: Exercises are available in `recursion-intro.js`.
</details>

<details>
<summary>Time Complexity</summary>
What makes an algorithm fast?

space complexity = how much memory is used?

time complexity = 
how many comparisons are made?
how many swaps are made?

how many calculations do you have to do?

As your dataset grows, how much more work does your algorithm have to do? what defines that speed?

EX;

imagine on kayak.com youre trying to sort hotels from lowest to highest price. you could do this by evaluating each hotel in the hotel list to every hotel in the list to find the price difference. you could represent this by making a number of columns, the length of the hotel list, and the same for the rows as well. this would be considered 'n squared' because 'n' is the number of hotels, and its speed is whatever it is multiplied by whatever it is...

EX: 
5 hotels? n squared = 25 operations to do. 
10 hotels? 100 operations to do

another example. take the same amount of hotels and try to find the min and the max. for these two values, in each of the hotels you have to check if the hotel is higher than the max and lower than the min. 

the value here is N * 2, because you have to check the min and max for every input.
20 hotels? N * 2 =  40 operations

we can also call this '2N'....'N' being the size of the dataset. 

#### Understanding Big O 
in review to the previous thing:

- N squared = compare numbers to each other
- 2N = find min and max numbers 
- 2 = sorted list, find first and last

^ what does this mean in CS terms?

- N squared = O(n^2), quadratic
- 2N = O(n), linear
- 2 = O(1), constant. this is the fastest speed, its called constant because regardless how big our dataset gets, this speed stays constant. 

###### speeds
1. constant - O(1) = fastest
2. logarithmic - O(logn)
3. linear - O(n)
--- anything above linear is considered a bad algo 
4. quadratic - O(n^2)
5. exponential - O(k^n)

O = order...

check the cheatsheet and the slides in this lesson because you're not going to be able to understand the graphs. 

interesting: if you only have a small dataset, whether or not your algo is quadratic or constant or whatever doesnt really matter. its only when you have sets of data that are 1000s of items that you start to see its effect. 

#### Calculating Big O of JS Operations
arr.push()    // O(1)
arr.pop()     // O(1)
for(){}       // O(n)....as the array grows, we'll add to N to calculate its time complexity.
arr.unshift() // shift everythting over 1 index...let think about this:

[1,2,3,4]
TO:
[0,1,2,3,4] // 4 moves

[1,2,3,4, 5, 6, 7, 8]
[0, 1,2,3,4, 5, 6, 7, 8] // 8 moves

^ so we see its linear, being O(n)..n being the number of elements in the operation/array.

#### Calculating Big O of loops
we've discussed single JS operations so far...how do we calculate stuff if we have multiple expressions/loops, etc?

 EX: 
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
^ remember, you can CHOP off the fastest one...you just want the slowest algo. 


- `O(logn)`...a good example is the phonebook splitting example: 
* things are O(logn) when you cut a dataset in half in order to find something. this is also referred to as a binary search. 

##### Complexity of Common Operations
* O(1) - running a statement (1+1)
* O(1) - value look-up on an array,object,variable.
* O(logn) - loop that cuts problem in half in every iteration
* O(n) - looping through the values of an array
* O(n^2) - double nested loops
* O(n^3) - triple nested loops

###### Space complexity 
Question: when running an algo, are we creating an extra data structure to save our data?

#### Review: Time Complexity
Time complexity of an algorithm signifies the total time required by the program to run to completion. The time complexity is most commonly expressed as the Big O notation. 

Big O notation give us an industry-standard language to discus the performance of algorithms. Not knowing how to speak this language can make you stand as an inexperienced programmer. 

#### Big O Exercises
1.
```js
var countChars = function(str){ 
    var count = 0; //O(1)

    for(var i = 0; i < str.length; i++){ //O(n)
        count++; //O(1)
    }
    
    return count; //O(1)
};

countChars("dance"); //O(n)

countChars("walk"); //O(n) = LINEAR
```

2. 
```js
var countChars = function(str){

    return str.length;

};

countChars("dance"); //O(1)

countChars("walk"); //O(1) = CONSTANT


//How much more work would it take to get the 
//length of 1 million char string?
```

```js
var myList = ["hello", "hola"]; //O(1)

myList.push("bonjour"); //O(1)

myList.unshift();  //O(n)


//calculate the time complexity for the 
//native methods above (separately)
```
</details>

<details>
<summary>Bubble Sort</summary>

* sorting sucks in terms of speed, but we need to kow it for interviewing.

bubble sort = repeatedly swaps adjacent elements that are out of order. values 'bubble up' to the top of the data structure. 

the higher numbers bubble up to the end.

* NOTE: think of that hungarian dance. 

Interface: bubble sort 
1. sorting function
  - bubbleSort(list) --> returns a sorted list
    - loops through the list
    - compares adjacent elements
    - swaps higher item towards the end

Question: How is this different from implementing data structures? 
Answer: it doesnt appear to have a constructor first...no class patterns, instances, etc. 

Pseudocode: bubble sort
```js
function bubbleSort(list) {
  // for k, loop through 1 to n-1
    //for i loop 0 to n-2
      //if A[i] is greater than A[i + 1]
        // swap A[i] with A[i + 1]
}
```

You could go to the end of 'Elementary Sorting: Bubble Sort' video to understand the Big O calculation...its time complexity in short is O(n^2) as its a loop within a loop.

again: 
bubble loop time complextity = 0(n^2)
</details>

<details>
<summary>Algo Stability and Adaptability</summary>
* so far we've only thought about algo quality in terms of how fast it is. theres a few other things we can consider and in sorting, we're also looking for STABILITY.

a sorting algo is stable if it:
  * preserves the order of equal items
  
  EX: imagine a sorting algorithm that sorts bikes by price, from lowest to highest...it may start like this:

  ```js
  Bike A: $600 : 20 lbs
  Bike B: $500 : 30 lbs
  Bike C: $500 : 35 lbs
  ```

looks good...however, what if we have an additional requirement of also sorting by lowest weight to highest weight. we want to preserve the weight. 

  ```js
  Bike B: $500 : 30 lbs
  Bike C: $500 : 35 lbs
  Bike A: $600 : 20 lbs
  ```

^ as you see, bikes 'B' and 'C' are the same cost, but the lower weight bike comes first. WE PRESERVE THE ORDER if it suits our condition. if you dont have a secondary property, your 'stability' of your algorithm does not matter. THIS IS JUST SOMETHING TO CONSIDER!!!!!

another consideration: ADAPTABILITY

- this was highly glossed over...something to look up, for sure.
</details>

<details>
<summary>Selection Sort</summary>
* = selects the smallest element in an array, pushes it into a new array. 
```js
[1,6,8,2,5];

//new array
[1,2,5,6,8];
```

Selection sort in place:
-this selects the largest element in the array, swaps it to the end of the array. 
```js
[1,2,5,6,8]; //as you see, no new array. 
```
</details>

<details>
<summary>Insertion Sort</summary>
* = Selects the first element in an array, pushes it into a new array. as each new element is added ,insert the new element in the corect order. 

```js
[1,6,8,2,5];

// [1] 
// [1, 6] 
// [1, 6, 8] 
// [1, 2, 6, 8] 
// [1, 2, 5, 6, 8] 
```

diff b/w 'selection sort' and 'insertion sort': 
- SS first selects 1, then 2
- IS selects 1, then 6.

'Insertion sort' inserts, then sorts. 'Selection sort' sorts, then inserts.

Insertion Sort in place:

```js
[1,6,8,2,5];

// [1] 
// [1, 6] 
// [1, 6, 8] 
// [1, 2, 6, 8] 
// [1, 2, 5, 6, 8] 
```

Question on Adaptability:
* this is case by case...imagine if you only get halfway through an algo and its already sorted...how would you code for this?

#### Exercises: bubble, insertion, selection.
* all available in `/elementary-sorting`.
</details>

<details>
<summary>Merge Sort</summary>

Divide and conquer
0. recognize the base case
1. divide: break down the problem during each call
2. conquer: do work on each subset
3. combine: solutions

^ merge sort does this.
Concept: merging lists
* The merge step takes two sorted lists and merges them into one sorted list:

```js

var arr = [3,27,38,43];
var arr2 = [9,10, 82];

var mergedArr = [3,9,10,27,38,43,82];
```

we do this by comparing the first arr index (arr[0])with the second arr index (arrTwo[0]), and if its smaller, remove the first arr value and put into the new one. next you take the next first arr index (arr[1]) and evaluate it to the second array's first index, and then remove the smaller one from the array and push into the new array and keep this going until there's no values left in either array.

#### Pseudocode: merge routine

```js
merge(L, R);

Rpointer = 0
LPointer = 0
Output array = []

Loop until LPointer === L.length && RPointer === R.length
  if(L[LPointer] is greater than R[RPointer]) {
    push lower number (R[0]) to outputArray
    increment Rpointer
  } 
  else {
    push L[LPointer] to outPut array
    increment Lpointer
  }

```
^ REMEMBER: each list is sorted already!!

Concept: merge sort
- step 1: divide input array into 'n' single element subarrays
```js
[38, 27, 43, 3, 9, 82, 10]  //now divide it by 2

[38, 27, 43, 3] [9, 82, 10] //now divide it by 2 again

[38, 27]  [43, 3]  [9, 82]  [10] //now divide it by 2 again!

[38] [27]  [43] [3]  [9] [82]  [10] //this is our base case (length of 1)
```

- step 2. repeatedly merge subarrays and sort on each merge:

```js
[38] [27]  [43] [3]  [9] [82]  [10] //this is our base case (length of 1)

[27, 38]  [3, 43] [9, 82] [10]

[3,27, 38, 43] [9, 10, 82]

[3, 9, 10, 27, 38, 43, 82] //base case

```

so basically you take an array, you cut everything up (DIVIDE), then paste it back together in order (CONQUER). 

Pseudocode: merge sort

```js
mergeSort(list) 
  base case: if list.length < 2, return
  break the list into halves L & R
  Lsorted = mergeSort(L)
  Rsorted = mergeSort(R)
  return merge(Lsorted, Rsorted)
```

#### Time complexity for merge sort
- merge sort is O(n*logn) because we're cutting stuff in half over and over, but then we are putting it together....the time complexity of the merge is linear (O(n))... the 'logn' is the cut in half part.


This is so fucking confusing.

I think it was confusing beause I was thinking of it in terms of 1 function when it was basically 2 functions: theres the fn for breaking the array down in halves, and then inside that function we call the function to actually then take those broken down, 1-index-based arrays, sort them, and push them in. 

TLDR: 1 fn for breaking down array, 1 fn for merging into one ordered array.
</details>

<details>
<summary>Quick Sort</summary>
* this is another sorting algo, pretty famous. 

remember!

Steps for Divide & Conquer:

0. recognize the base case
1. divide: break the problem down during each call
2. Conquer: do work on each subset
3. Combine

With merge sort, all the work is happening on the combination piece. with quick sort, we skip the combination part bc we're doing something in place...and all the action happens in the partition/splitting piece. 

steps
===
1. we take a value in the unordered array, we'll call that a 'pivot'. 
2. we'll partition the array using the pivot: values less than the pivot come before the pivot and values greater go afterwards.
3. recursively apply steps 1 & 2 to the subarrays on either side of the pivot.

####### Details: partition
* pivot point - the element that will eventually be put into the proper index (NOTE: pivot point often begins at beginning or end index of arrray)
* pivot location - the pointer that keeps track of where the list is less than on the left and greater than our pivot point on the right. eventually becomes equal to pivot point when sorted. 

Goal: move the pivot to its rightful place in the array

steps
1. choose pivot point, last element
2. start pivot location at beginning of the array. 
3. iterate through array and if element <= pivot, swap element before pivot location. 

 my thoughts:
 it appears with a quick sort, you grab the last element of the array. this will be your pivot point. you then iterate through the array starting at the first index and if the element compared is less than or equal to the pivot point value, swap the element before the pivot location. 

 confusing, but i'll keep working through it. 

 * Quick sort is the most popular sort and considered the fastest. but we should probably call it partition sort!!!


 ##### Pseudocode: Quick Sort

 ```js
 partition(arr,lo, hi)
  choose last element as the pivot // arr[arr.length] (4)

  keep track of index for pivotLoc //0
  initialized as lo 

  for i, loop from low to high //0 to arr.length
    if current arr[i] <= pivot
      swap pivotLoc and i //nothing happens!!
      increment pivotLoc
    else 
      swap arr[arr.length - 1] with arr[i]
      //save '4' in variable
      //swap arr[arr.length - i ] with arr[i]
 ```
[3,7,6,1,2,5,4]

^ lets look at the swap here. first we take '4' as our pivot point. then starting at the beginning of the array, we'll begin to evaluate

1. 3 is less than 4, so nothing happens, we increment our 'pivotLoc' variable and go to the next one. 
2. 7 IS greater than our pivot point '4' so we SWAP 4 WITH 7. 
3. next we DO ANOTHER SWAP where swap our newly swapped pivot point '4' from its new index of '1' to the index of arr.length - 1...

this is what it looks like:
1. `[3,7,6,1,2,5,4]` //nothing changes
2. `[3,4,6,1,2,5,7]` // swap 4 with 7
3. `[3,5,6,1,2,4,7]` // swap pivot point '4' with 'arr.length - 1' (5)

we continue this process of checking to see if a value is less than out pivot point, and if so doing the double swap as described until we get to a point where everything on the left side of the pivot point is less than the pivot point and everything on the right side is greater than the pivot point. 

this is our end result:

`[3,2,1,4,6,5,7]`

^ look at our pivot point '4'.

once our pivot location meets its place, its found its place and is good. 

##### Debugging the quick sort algo

partition(arr, first, last) {
  let picotLoc = first;
  let pivot = arr[last];

  loop from first to last
    if  pivot > arr[pivotLoc]
      then increment pivotLoc
    else, 
      swap pivot with arr[pivotLoc] && swap pivot with arr[arr.length - 2] 
      // maybe we should track 'arr[arr.length - 2]' somewhere?
}

how do we know when our pivot location is in our final resting place?

//TODO: add in your break for when the pivot has landed. how do you know when?

partition(arr, first, last) {
  let picotLoc = first;
  let pivot = arr[last];

  loop from first to last
    if  pivot > arr[pivotLoc]
      then increment pivotLoc
    else, 
      swap pivot with arr[pivotLoc] && swap pivot with arr[arr.length - 2] 
      // maybe we should track 'arr[arr.length - 2]' somewhere?
}

**interesting: most native implementations of a sort() are a quick sort underneath!!!**

* quick sorts are the most quick sorting algorithms UNLESS you have an algo that is mostly sorted already OR you have a case where the highest number is on the last element always..if its like that, you might as well do a bubble sort. 

**Exercises in `elementary-sorting/quick-sort.js`**
</details>



<details>
<summary>Trees</summary>
- trees are upside down in CS
- top is called 'root', and child nodes are 'children'.
- nodes with no children are called 'leaves'.

#### interface: trees
* trees are a data structure, so we'll use JS' pseudoclassical class structure

constructor:
  - storage 
  - root
methods:
  - insert(key) insert a new key in the tree
  - search(key) search for the key in the tree and returns true if exists and false if not
  - min/max: returns min/max value of tree
  - remove(key): removes a key from a tree
</details>


<details>
<summary>Linked Lists</summary>
* a primitive data structure, we dont use it that match.
* its basically a tree where each node only has one child. 

each node in the list contains:
  1. stored data - a node value
  2. stored reference - a LINK - to the next item in the list.

**at the end of our linked list, the pointer (reference) is listed as null.**


* linked list removal = just change the reference pointer..
ex: 
node a -> contains reference to node b -> contains reference to node c
remove node b like: `node a -> contains a reference to node c`

#### Interface: linked list
1. constructor fn
  - storage
  - head
2. methods
  - addToTail(val) // adds node to tail
  - remove(node)   // removes node from list & returns it

* Linked lists kinda suck for lookup but are great for adding/removing to a DS quickly.

### Why Use a linked list
* lists vs arrays
  * traditionally arrays have a fixed size, linked lists dont
  * linked lists are efficient at inserting and deleting, not so 
  * Random Access is NOT efficient for a linked list (ex: you want something at index 5? you'll have to go through every element in list to retrieve the element at index 5)
  * linked lists have no waste of memory beause of its dynamic size, whereas arrays do
  * sequential access is faster in arrays because elements have specific memory locations.

  SO Linked Lists are efficient at inserting/deleting, but suck ass for retrieval.

**Linked List example gone through and understood via youtube, exercise in `linkedlist.js`**
</details>


<details>
<summary>Hash Tables</summary>


made of 2 things:
* something to store stuff in
* a hashing fn

* JS objects are hash tables underneath.

* JS objects are represented as key/value pairs `user: mathesond2`

* a hashing fn maps the key to an index. this is what makes object key/val lookup as constant time O(1).


#### Concept
a hashing fn = takes an input of any size and returns a hash code identifier of a fixed size.

myHash('really long string') => 7

myHash('short string') => 11

think of a hash table as the phone book, using the name, getting the address of a name

#### Pseudocode
```js

myHash(input) { //must be a string,number, (whatever constraints you want on it)

//'hello are we there yet' => 764.z
//'hello are we there yet' => 764.z (you want the same thing everytime)


}
```

*  how do we do this? here's one way....
1. get the ascii value of each character
2. add or multiply them together
3. then return it as something like binary or hex instead of a decimal value (base16).


#### key components
1. storage (cant use an object, we can use an array)
2. hashing fn - this will take our input and return a number that could be an index on our array.


#### Operations
myHashTable.set(prop, val);
myHashTable.get(prop); 
myHashTable.remove(prop);

another example of how a hash table works:

```js
myObj = {};
myObj.something = true;
myObj.hello = 'hola';

{something: true, hello: 'hola'}

myHash('something') => //returns 3 for index value in memory

memory [___, ___, ___, ___, true]

myObj.something //true
```

**when we call `myObj.something`, under the hood, JS is using a hash table to get the address of where 'true' lives in memory.**


### Pseudocoding

```js

Constructor
  storage = [und, und, und, und, und]; //size of 5, und = undefined..just pseudocode here.
  hashingFn(val) => index for array //(0-4)


  set(key, val)
    //save the val in the array
      //run the hashingFn('something') => 3
      //save 'true' (our val) to the 3rd index of our storage

  get(key)
    //we want to return the val saved in storage
      //run the hashingFn on the key again, which will give you the address of the key. then using that key, retrieve the val from the storage array.

  remove(key)
    // set the value at the index to null
      //we get the key by hashing the key
      //look up the index in the storage and set to null.
```

### Dealing with collisions

a collision is what happens when you have the same index/address for multiple values. this is bound to eventually happen with a fixed number of events.

so we should account for this. 

```
storage = [und, und, und, und, und];

// becomes
storage = [und, und, und, [true, 'hola'], und];
```

^ so we store an array that holds the 2 values that have the same index/address. but how do we still grab the right one?

you can store the key as well as the value. we create what we call 'a tuple':

```js
storage = [
  und, 
  und, 
  und, 
  [[something,true], ['hello', 'hola']], und
];
```

^ this works but we'll have to loop through the inside array to find the matching key.


</details>