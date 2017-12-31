time complexity
===

#### calculating:
1. estimate each operation in your algo, line by line
2. add notations if they're side by side OR multiply them if theyre inside a loop.
3. drop any non-significant digits (ex: O(1)) and assume the worse case scenario.


vocabulary
===
stable - preserves the original order for items of the same value

adaptive - becomes more efficient when the list is nearly sorted...what DOES THIS MEAN?

Recursion
===
what worked here in learning recursion?

-adding metaphors (the staircase you extend to walk back up, the snowball going down the hill)
-tracking the stack frames was really nice. 
- in recursion, we learned how the location of the recursive call matters in terms of execution order. 


Merge Sort
===
0. recognize base case
`ex: when array is a size of one`
1. divide: break problem down during each recursive call
`everytime we recursed we were breaking our problem into a 'left' and a right`
2. conquer: merge
3. combine: merge
`when merging we're conquering and combining in one function`

^ THINK OF THE DIAMOND DIAGRAM

2 functions
1. breaking down
2. merging the left and right arrays

Time Complexity: O(nlogn) because we're tearing it in half each time.



Quick Sort
===
* goal: move the pivot to its sorted place in the array. 

* remember: the pivot location only changes when the element <= pivot.

* swap the pivot to final pivot location at the end (after the loop).


Stacks/Queues
===
* these are limited access data structure - LIFO or FIFO
* good for fast insert and fast removal

#### stack
interface:
* FIFO
* Push/pop (O(1))

#### queue
interface:
* LIFO
* Dequeue/Enqueue O(1)

### uses
* stack - call stack, backtracking in a maze, undo operations

* queue - pop-up messages, user events, http requests


Linked lists
===
* objects that are linked together with a reference to the next one

* you can only access it sequentially. 

**data structures underlie databases**


**a linked list is a tree that only has one child**


Trees
===

tree example:
```js
//N-ary tree (any number of children)
function Tree (val) {
  this.value = val;
  this.children = [];
}

Tree.prototype.addChild = function (val) {
  let child = new Tree(val);
  this.children.push(child);
  return child;
};

let tree = new Tree(1);           // { value: 1, children: [] }
let branch1 = tree.addChild(2);   // { value: 1, children: [{ value: 2, children: [] }] }
let branch1 = tree.addChild(3);   // { value: 1, children: [{ value: 2, children: [] }, { value: 3, children: []} }
let branch1 = tree.addChild(4); // { value: 1, children: [{ value: 2, children: [] }, { value: 3, children: []}, { value: 4, children: []} }


branch1.addChild(5);  // { value: 1, children: [{ value: 2, children: [{ value: 5, children: [] }] }, { value: 3, children: []}, { value: 4, children: []} }

//and you could go on with it like:
branch1.addChild(6);
branch2.addChild(7); //etc etc
```

**trees were not covered well in this course so you'll have to find something else to augment your learning**.


also traversing trees is a RECURSIVE THANG!!!

Hash Tables
===
