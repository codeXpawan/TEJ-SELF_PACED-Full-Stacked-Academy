// YOUR CODE BELOW
function whosASpecial(arr){
    let result = [];
    arr.forEach(isVerySpecial);

    function isVerySpecial(obj){
        result.push(`${obj.name} the ${obj.species} is very special!`);
    }

    return result.join(' ');
}
