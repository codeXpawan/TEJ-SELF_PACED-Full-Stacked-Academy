// YOUR CODE BELOW
function chainReaction(startVal, funArr){
    let result = startVal;
    funArr.forEach(function(func) {
        result = func(result);
    });
    return result;
}