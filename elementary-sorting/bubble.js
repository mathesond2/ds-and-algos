/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

var myArr = [1,9,5,2,4,7,8]; //O(1)

function bubbleSort(arr) {
  for(let j = 0; j < arr.length; j++) {  //O(n)

    for(let i = 0; i < arr.length; i++) { //O(n)
      if (arr[i] > arr[i + 1]) {
        let firstIndex = arr[i]; //O(1)
        arr[i] = arr[i + 1];     //O(1)
        arr[i + 1] = firstIndex; //O(1)
      }
    }

  }
  return arr; //O(1)
}
//Time Complexity is O(n^2) as its a loop within a loop.

console.log(bubbleSort(myArr));