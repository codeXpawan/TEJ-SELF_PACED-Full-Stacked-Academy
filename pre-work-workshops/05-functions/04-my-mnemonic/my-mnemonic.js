// YOUR CODE BELOW
function myMnemonic(firat_arg = "", second_arg = "", third_arg = "", fourth_arg = "") {
    if (firat_arg === "" && second_arg === "" && third_arg === "" && fourth_arg === "") {
        return "Please provide at least one argument.";
    }
    
    let mnemonic = "";
    
    if (firat_arg !== "") {
        mnemonic += firat_arg.charAt(0).toUpperCase();
    }
    
    if (second_arg !== "") {
        mnemonic += second_arg.charAt(0).toUpperCase();
    }
    
    if (third_arg !== "") {
        mnemonic += third_arg.charAt(0).toUpperCase();
    }
    
    if (fourth_arg !== "") {
        mnemonic += fourth_arg.charAt(0).toUpperCase();
    }
    
    return mnemonic;
}