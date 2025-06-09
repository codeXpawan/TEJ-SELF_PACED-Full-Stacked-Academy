// YOUR CODE BELOW
function searchParty(name, world){
    let result = [];
    for (let key in world) {
        if (typeof world[key] === 'object' && world[key] !== null && !Array.isArray(world[key])) {
            let found = searchParty(name, world[key]);
            if (found) {
                result.push(key,...found);
                break;
            }
        } else if (Array.isArray(world[key])) {
            for (let i = 0; i < world[key].length; i++) {
                if (world[key][i] === name) {
                    result.push(key);
                    break;
                }
            }
        }
         else if (world[key] === name) {
            result.push(key);
        }
    }
    return result.length > 0 ? result : null;
}
