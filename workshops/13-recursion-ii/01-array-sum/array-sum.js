// YOUR CODE BELOW
function arraySum(arr){
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += arraySum(arr[i]); // Recursively call arraySum for nested arrays
        }
        else {
            sum += arr[i]; // Add the number to the sum
        }
    }
    return sum;
}