// YOUR CODE BELOW
function dogBreeder(name = 'Steve', age = 0){
    if (typeof name !== 'string') {
        age = name;
        name = 'Steve';
    }
    return {name: name, age: age};
}