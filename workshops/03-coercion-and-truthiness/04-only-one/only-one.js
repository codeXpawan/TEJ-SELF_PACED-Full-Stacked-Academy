// YOUR CODE BELOW
function onlyOne(arg1, arg2, arg3) {
    let count = 0;
    if (arg1) count++;
    if (arg2) count++;
    if (arg3) count++;
    
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}