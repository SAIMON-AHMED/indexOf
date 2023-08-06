/*
We have defined a function, quickCheck, that takes an array and an element as arguments.
Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
*/

function quickCheck(arr, elem) {
  return (arr.indexOf(elem) != -1);
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));
