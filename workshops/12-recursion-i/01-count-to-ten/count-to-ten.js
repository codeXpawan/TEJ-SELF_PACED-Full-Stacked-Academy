// YOUR CODE BELOW
function countToTen(num){
    if(num > 10 || num === 10){
        console.log(num);
        return;
    }
    console.log(num);
    countToTen(num + 1);
}