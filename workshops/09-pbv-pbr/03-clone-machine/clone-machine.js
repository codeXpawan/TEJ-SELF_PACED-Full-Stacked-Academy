// YOUR CODE BELOW
function cloneMachine(obj){
    const cloneObj = {name: obj.name + 'Clone', species: obj.species, offspring: []};
    obj.offspring.push(cloneObj.name);
    return cloneObj;
}