// YOUR CODE BELOW
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    str = str.toLowerCase();
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}