// YOUR CODE BELOW
function partial(callback, arg1){
    return function(arg2){
        return callback(arg1, arg2);
    }
}