// YOUR CODE BELOW
function mySlice(originalArray, startIdx = 0, endIdx){
    if (startIdx < 0){
        startIdx = originalArray.length + startIdx;
    }
    if (endIdx === undefined) {
        endIdx = originalArray.length;
    }
    if (endIdx < 0) {
        endIdx = originalArray.length + endIdx;
    }
    result = [];
    for (let i = startIdx; i < endIdx; i++) {
        result.push(originalArray[i]);
    }
    return result;
}