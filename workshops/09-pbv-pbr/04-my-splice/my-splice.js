// YOUR CODE BELOW
function mySplice(arr, start, deleteCount, item){
    removedItems = [];
    for (let i = 0; i < deleteCount; i++) {
        removedItems.push(removeValueFromIndex(arr, start));
    }
    if (item !== undefined) {
        addValueToIndex(arr, start, item);
    }

    return removedItems;
}

function removeValueFromIndex(arr, index) {
    let removedValue = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return removedValue;
}

function addValueToIndex(arr, index, value) {
    arr.length++;
    for (let i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
}