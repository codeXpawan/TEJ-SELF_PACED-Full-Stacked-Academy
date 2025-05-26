// YOUR CODE BELOW
function maxOfThree(a, b, c){
    if (a > b){
        return a > c ? a : c;
    }
    return b > c ? b : c;
}