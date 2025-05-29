// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(place1) {
    return innerFunction('New York State');

    function innerFunction(place2) {
      let place3 = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + place1 + ', ' + place2 + ', ' + place3;
      }
    }
  }
}
