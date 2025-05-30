// YOUR CODE BELOW
function oddCouple(arr) {
  let oddNumbers = arr.filter(num => num % 2 !== 0);
  return oddNumbers.slice(0, 2);
}