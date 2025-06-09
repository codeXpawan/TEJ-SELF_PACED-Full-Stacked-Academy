// YOUR CODE BELOW
function getLongestName(obj){
    let longestName = '';

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const nestedLongest = getLongestName(obj[key]);
            // console.log(`Nested longest name: ${nestedLongest}`);
            if (nestedLongest.length > longestName.length) {
                longestName = nestedLongest;
            }
        }
        else if (key.length > longestName.length) {
            longestName = key;
            // console.log(`Current longest name: ${longestName}`);
        }
        // console.log(key.length > longestName.length)
        // console.log(`Checking key: ${key}`); 
    }

    return longestName;
}
