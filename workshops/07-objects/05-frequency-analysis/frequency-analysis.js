// YOUR CODE BELOW
function frequencyAnalysis(str) {
    const frequency = {};

    for (let chr of str){
        if(frequency[chr]){
            frequency[chr]++;
        }else{
            frequency[chr] = 1;
        }
    }
    return frequency;
}