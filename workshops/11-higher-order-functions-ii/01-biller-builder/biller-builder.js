// YOUR CODE BELOW
function billerBuilder(stateName){
    return function (price){
        return stateName === 'NY'? price * 1.03 * 1.04 : price * 1.05 * 1.06625;
    }
}