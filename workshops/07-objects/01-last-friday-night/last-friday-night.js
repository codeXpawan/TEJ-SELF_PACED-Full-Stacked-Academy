// YOUR CODE BELOW
function lastFridayNight(arr){
    let totalAmount = 0;
    for (let i = 0; i < arr.length; i++) {
        totalAmount += arr[i].amount;
    }
    return totalAmount;
}