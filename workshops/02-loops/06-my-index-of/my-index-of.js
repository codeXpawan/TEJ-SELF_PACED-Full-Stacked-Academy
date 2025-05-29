// YOUR CODE BELOW
function myIndexOf( source, searchValue, startIdx){
    if (startIdx === undefined){
        startIdx = 0;
    }

    let index = -1;
    for (let i = startIdx; i < source.length; i++){
        if (source[i] === searchValue[0]){
            for (let j = 0; j < searchValue.length; j++){
                if (source[i + j] !== searchValue[j]){
                    break;
                }
                if (j === searchValue.length - 1){
                    index = i;
                    return index;
                }
            }
        }
    }
    return index;
}