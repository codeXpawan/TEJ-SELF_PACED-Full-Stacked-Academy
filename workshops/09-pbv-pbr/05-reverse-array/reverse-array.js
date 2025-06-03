// YOUR CODE BELOW
function reverseArray(arr){
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.pop());
        console.log(newArr);
    }
    while (newArr.length > 0) {
        arr.push(newArr.shift());
        console.log(arr);
    }
    return arr;
}