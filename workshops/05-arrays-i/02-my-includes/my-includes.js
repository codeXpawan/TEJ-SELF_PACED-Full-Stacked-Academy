// YOUR CODE BELOW
function myIncludes(arr, Searchvalue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Searchvalue) {
            return true;
        }
    }
    return false;
}