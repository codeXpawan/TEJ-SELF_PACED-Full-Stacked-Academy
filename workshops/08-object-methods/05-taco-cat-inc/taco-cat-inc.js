let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function() {
  let sum = 0;
  const inventory = [
    this.gourmetShell,
    this.gourmetFishFilling,
    this.gourmetVeggie,
    this.gourmetSeasoning
  ];
  for (const category of inventory) {
    for (const item in category) {
      sum += category[item].quantity * category[item].cost;
    }
  }
  return sum;
}

tacoCatInc.sale = function(ordersObj){
  let orderCost = 0;
  orders = Object.keys(ordersObj);
  for (order of orders){
    this[order][ordersObj[order]].quantity--;
    orderCost += this[order][ordersObj[order]].cost;
  }
  this.cash += orderCost;
  return orderCost;
}