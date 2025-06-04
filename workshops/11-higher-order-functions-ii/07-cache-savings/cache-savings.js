// YOUR CODE BELOW
function cacheSavings(callback){
    let cache = {};
    return function(arg){
        if (cache[arg]) {
            return cache[arg];
        }
        cache[arg] = callback(arg);
        return cache[arg];
    }
}