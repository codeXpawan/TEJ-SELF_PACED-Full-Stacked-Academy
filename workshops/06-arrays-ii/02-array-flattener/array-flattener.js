// YOUR CODE BELOW
function arrayFlattener(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}