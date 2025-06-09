// YOUR CODE BELOW
function theTruthCounts(nestedArr){
    let count = 0;
    for (let i = 0; i < nestedArr.length; i++) {
        if (Array.isArray(nestedArr[i])) {
            count += theTruthCounts(nestedArr[i]);
        } else if (nestedArr[i]) {
            count++;
        }
    }
    return count;
}