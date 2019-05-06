var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  str = "In your cart, you have ";
  
}

function total() {
  total = 0;
  cart.forEach(item) {
    total += item[itemPrice];
  }
  return total;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    cart.length = 0;
    console.log("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.");
  }
}
