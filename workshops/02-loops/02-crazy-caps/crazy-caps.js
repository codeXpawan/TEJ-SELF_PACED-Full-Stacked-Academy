// YOUR CODE BELOW
function crazyCaps(textString){
    crazyString = '';

    for (let i = 0; i < textString.length; i++){
        console.log(textString[i]);
        if(i % 2 == 0){
            crazyString += textString[i];
        }else{
            crazyString += textString[i].toUpperCase();
        }
    }
    return crazyString;
}
