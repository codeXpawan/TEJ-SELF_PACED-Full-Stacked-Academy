// YOUR CODE BELOW
const onlyOdds = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        if(i % 2 != 0){
            sum += i;
        }
    }
    return sum;
}