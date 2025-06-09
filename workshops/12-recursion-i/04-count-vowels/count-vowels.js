// YOUR CODE BELOW
function countVowels(str){
    if(str.length === 0){
        return 0;
    }
    const firstChar = str[0].toLowerCase();
    const isVowel = 'aeiou'.includes(firstChar);
    return (isVowel ? 1 : 0) + countVowels(str.slice(1));
}