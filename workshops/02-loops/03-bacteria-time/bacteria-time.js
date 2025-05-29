// YOUR CODE BELOW
function bacteriaTime(currentNum ,targetNum){
    let requiredMinutes = 0;
    if(targetNum < currentNum)
        return 'targetNum must be larger than currentNum';

    while(targetNum > currentNum){
        requiredMinutes += 20;
        currentNum *= 2;
    }
    return requiredMinutes;
}

console.log(bacteriaTime(3, 6000));