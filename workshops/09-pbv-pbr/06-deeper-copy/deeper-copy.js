// YOUR CODE BELOW
function deeperCopy(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let subArray = [];
            for (let j = 0; j < arr[i].length; j++) {
                subArray.push(arr[i][j]);
            }
            newArr.push(subArray);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}