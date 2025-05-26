// YOUR CODE BELOW
function taxCalculator(price, state){
    if( state === 'NY' ){
        return price + price * 0.04;
    }
    else if( state === 'NJ' ){
        return price + price * 0.06625;
    }
    else{
        error('Invalid state');
        return null;
    }
}