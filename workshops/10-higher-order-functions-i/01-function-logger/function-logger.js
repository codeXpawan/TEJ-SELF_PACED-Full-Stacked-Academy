// YOUR CODE BELOW
function functionLogger(fn, arg){
    console.log("Function starting");
    const result = fn(arg);
    console.log("Function complete");
    return result;
}