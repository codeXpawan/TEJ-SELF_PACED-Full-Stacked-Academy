// YOUR CODE BELOW
function myMnemonic(...words) {
    
    let mnemonic = "";
    
    words.forEach((word) => {
        mnemonic += word[0];
    });
    
    return mnemonic;
}