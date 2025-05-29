// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx){
    if(startIdx === undefined)
        return originalString;

    if(endIdx === undefined)
        endIdx = originalString.length;

    if( startIdx > endIdx)
        return 'starting Id should be greater than end Id';

    let slicedString = '';
    for (let i = startIdx; i < endIdx; i++){
        slicedString += originalString[i];
    }
    return slicedString;
}
