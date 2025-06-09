// YOUR CODE BELOW
function allSystemsGo(nestedObj){
    for (let key in nestedObj) {
        if(typeof nestedObj[key] === 'object') {
            if (!allSystemsGo(nestedObj[key])) {
                return false;
            }
        }else if (nestedObj[key] !== true) {
            return false;
        }
    }
    return true; 
}