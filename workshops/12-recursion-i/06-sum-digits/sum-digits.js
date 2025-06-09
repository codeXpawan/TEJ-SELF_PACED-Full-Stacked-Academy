// YOUR CODE BELOW
function sumDigits(num) {
    if (num < 10) {
        return num;
    }
    return (num % 10) + sumDigits(Math.floor(num / 10));
}