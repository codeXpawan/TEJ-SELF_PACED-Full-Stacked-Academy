// YOUR CODE BELOW
function myLastIndexOf(arr, searchValue, startIdx){
    if (startIdx === undefined){
        startIdx = arr.length;
    }
    let lastIndex = -1;
    for (let i = 0; i < startIdx; i++) {
        if (arr[i] === searchValue) {
            lastIndex = i;
        }
    }
    return lastIndex; 
}