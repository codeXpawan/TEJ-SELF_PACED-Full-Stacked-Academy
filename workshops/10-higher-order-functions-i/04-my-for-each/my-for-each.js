// YOUR CODE BELOW
function myForEach( arr, callback ) {
  for ( let i = 0; i < arr.length; i++ ) {
    callback( arr[i] , i);
  }
}