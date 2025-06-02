// YOUR CODE BELOW
function zooInventory(arr){
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const [animalName, [animal, animalCount]] = arr[i];

        result.push(`${animalName} the ${animal} is ${animalCount}.`);
    }
    return result;
}