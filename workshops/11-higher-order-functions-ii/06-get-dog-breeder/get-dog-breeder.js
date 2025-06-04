// YOUR CODE BELOW
function getDogBreeder(name1 = 'Steve', age1 = 0) {
    if (typeof name1 !== 'string') {
        age1 = name1;
        name1 = 'Steve';
    }

    function dogBreeder(name2, age2){
        if (name2 === undefined) {
            name2 = name1;
        }
        if (age2 === undefined) {
            age2 = age1;
        }
        if (typeof name2 !== 'string') {
            age2 = name2;
            name2 = name1;
        }
        return {name: name2, age: age2};
    }

    return dogBreeder;
}