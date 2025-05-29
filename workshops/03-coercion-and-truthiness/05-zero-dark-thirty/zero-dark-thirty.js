// YOUR CODE BELOW
function zeroDarkThirty(arg){
    if (arg === 0){
        return NaN;
    }
    stringNum = String(arg);
    removedZeroNum = "";
    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum[i] !== '0') {
            removedZeroNum += stringNum[i];
        }
    }
    return Number(removedZeroNum);
}