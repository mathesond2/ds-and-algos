/*
SELECTION SORT
*** Description
Iterate over array and grow a sorted array behind current element.
For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.
example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises
- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?
*/

// const myArr = [1,9,5,2,4,7,8]; //O(1)

// //selects the smallest element in an array, pushes it into a new array. 
// function selectionSort(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     let lowestValue;
    
//     for(let j = 0; j < arr.length; j++) {
//       // console.log(currentVal, arr[j]);
//       if (arr[i] > arr[j]) {
//         lowestValue = arr[j];
//       } else {
//         lowestValue = arr[i];
//       }
//     }

//     newArr.push(lowestValue);
//   }

//   return newArr;
// }

// console.log(selectionSort(myArr));


var selectionSort = function (array, comparator) {
  comparator = comparator || defaultComparator;
  array.forEach(function(element, index) {
    // for each position, find index of minimum value in subarray starting at that positions
    var minValue = element;
    var minIndex = index;
    for (var i = index; i<array.length; i++) {
      if (comparator(array[i], minValue) < 0)
        {
          minValue = array[i];
          minIndex = i;
        }
    }
    // swap values at min index and current position
    array = swap(array, index, minIndex);
  });
  return array;
};

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function defaultComparator(a,b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
};

//this is MESSED UP!!! NEITHER SWAP OR COMPARATOR WAS MENTINOED. THIS SUCKS!!

