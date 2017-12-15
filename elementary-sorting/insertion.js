/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

const myArr = [1,9,5,2,4,7,8]; //O(1)

function insertionSort(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(newArr.length === 0 ) {
      newArr.push(arr[i]);          //1
    }   
    else {
      if (arr[i] > newArr[i - 1]) { // i = 1    arr[1] > newArr[0] = 9 > 1 YES...
        newArr.push(arr[i]);
      } else {
        for (let j = newArr.length; j > 0; j--) {
          // console.log('hey');
          if (arr[i] < newArr[j]) {
            console.log
          // newArr.splice(j - 1, 0, arr[i]); 
          }
        }
      }
    }

  }
  return newArr;
}

console.log(insertionSort(myArr));

//NOT FINISHED!!!!!!!!!!