// YOUR CODE BELOW
function myJoin(array, seprator = ','){
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if(array[i])
            result += array[i];
        if (i < array.length - 1) {
            result += seprator;
        }
    }
    return result;
}