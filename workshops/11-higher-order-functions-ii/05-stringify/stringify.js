// YOUR CODE BELOW
function stringify(callback){
    return function(){
        let result = callback();
        result = result.toString();
        return result;
    }
}