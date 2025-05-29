// YOUR CODE BELOW
function justInCamelCase(underName) {
  let camelCaseOutput = "";
  let foundunder = false;
  for(let i = 0; i < underName.length; i++) {
    if (underName[i] === "_") {
      foundunder = true;
    } else {
      if (foundunder) {
        camelCaseOutput += underName[i].toUpperCase();
        foundunder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}
