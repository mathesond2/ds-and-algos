//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loopNumbers(num) {
  while(num > 0 ) {
    console.log(`number is ${num}`);
    num--;
  }
}

// loopNumbers(5);
//2. Next, try looping just like above except using recursion
function recursiveLoopNumbers(num) {
  console.log(`number is ${num}`);

  if (num <= 1 ){
    return 'complete';
  }

  return recursiveLoopNumbers(num - 1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let exponentValue = base;

  while(expo > 1) {
    exponentValue *= base;
    expo--;
  }

  return exponentValue;
}

// console.log(exponent(2, 5));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {  
  if(expo === 1 ) {
    return base;
  }

  return base * recursiveExponent(base, --expo);
}

// console.log(recursiveExponent(2, 5));
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  if(arr.length === 0){
    return arr;
  }

  var last = arr.pop();

  recursiveMultiplier(arr, num);

  arr.push(last * num);

  return arr;
}

// recursiveMultiplier([3,2,1], 2); // [6, 4, 2]

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  if(arr.length === 0){
    return arr;
  }

  var last = arr.pop();
  
  recursiveReverse(arr);

  arr.splice(0, 0, last);

  return arr;
}

console.log(recursiveReverse([3,2,1]));
