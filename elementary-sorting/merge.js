/*
MERGE SORT
*** Description
Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises
- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?

ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]
*/

/*
mergeSort(list) 
  base case: if list.length < 2, return
  break the list into halves L & R
  Lsorted = mergeSort(L)
  Rsorted = mergeSort(R)
  return merge(Lsorted, Rsorted)
*/

/*
function mergeSortRecursive (array) {
  // base case
  if (array.length <= 1) return array;

  // divide and conquer!!
  var leftHalf = array.slice(0, array.length/2);
  var rightHalf = array.slice(array.length/2);
  var leftSorted = mergeSortRecursive(leftHalf);
  var rightSorted = mergeSortRecursive(rightHalf);

  // merge subarrays
  return merge(leftSorted, rightSorted);
};
*/


function mergeSortRecursive(arr) {
  if (arr.length <= 1) { return arr; }

  let L = arr.slice(0, arr.length/2);
  let R = arr.slice(arr.length/2);

  let Lsorted = mergeSortRecursive(L);
  let Rsorted = mergeSortRecursive(R);

  return mergeArrays(Lsorted, Rsorted);
}

function mergeArrays(arrOne, arrTwo) {
  let Rpointer = 0;
  let Lpointer = 0;
  let outputArray = [];

  while(outputArray.length < (arrOne.length + arrTwo.length)) {
    // if all elements in left have been added, then add remaining right elements
    if (Lpointer === arrOne.length) { 
      outputArray = outputArray.concat(arrTwo.slice(Rpointer)); 
    }

    // if all elements in right have been added, then add remaining left elements
    else if (Rpointer === arrTwo.length) { 
      outputArray = outputArray.concat(arrOne.slice(Lpointer)); 
    }

    //add the lowest value and after added, increment the respective index pointer
    else if (arrOne[Lpointer] <= arrTwo[Rpointer]) {
      outputArray.push(arrOne[Lpointer++]);
    } else {
      outputArray.push(arrTwo[Rpointer++]);
    }
  }

  return outputArray;
}

// var myArr = [1,20,50];
// var myArrTwo = [9,33,230];
// console.log(mergeArrays(myArr, myArrTwo));

let blah = [2, 5, 3, 9, 6, 8];
console.log(mergeSortRecursive(blah));