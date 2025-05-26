// YOUR CODE BELOW
const lastCharacter = (first_argument, second_argument) => {
    if (first_argument && second_argument) {
        return first_argument[first_argument.length - 1] === second_argument[second_argument.length - 1];
    }
    return false;
}