// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum){
    if (rotateNum < 0) {
        rotateNum = originalArray.length + rotateNum;
    }
    
    const rotatedPart = originalArray.slice(-rotateNum);
    const remainingPart = originalArray.slice(0, -rotateNum);
    return rotatedPart.concat(remainingPart);
}