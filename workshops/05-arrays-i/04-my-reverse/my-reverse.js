// YOUR CODE BELOW
function myReverse(arr){
    const reversedArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}