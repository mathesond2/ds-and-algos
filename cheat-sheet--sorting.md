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

 