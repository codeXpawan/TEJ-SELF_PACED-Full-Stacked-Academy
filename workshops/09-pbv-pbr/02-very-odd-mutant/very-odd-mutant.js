// YOUR CODE BELOW
function veryOddMutant(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
            arr[i] = 'normie';
        }
    }
    return count;
}