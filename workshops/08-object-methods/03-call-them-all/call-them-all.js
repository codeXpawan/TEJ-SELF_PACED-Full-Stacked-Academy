// YOUR CODE BELOW
function callThemAll(obj, value) {
    const methods = getMethods(obj);
    let results = [];
    for (let method of methods) {
        results.push(obj[method](value));
    }
    return results;
}

function getMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(key => typeof obj[key] === 'function');
}