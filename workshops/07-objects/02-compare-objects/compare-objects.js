// YOUR CODE BELOW
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }
    return false;
}