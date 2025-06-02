// YOUR CODE BELOW
function evenAndOdd(arr) {
    const evenODD = [arr.filter(num => num % 2 === 0), arr.filter(num => num % 2 !== 0)];

    return evenODD;
}