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

  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else if (cart.length === 1) {
      str += "${name} at $${price}.";
      console.log(str);
    } else if (cart.length === 2) {
      str += "${name1} at $${price1}, and ${name2} at ${price2}.";
      console.log(str);
    } else {
      str += "${name[0..-2]} at $${price}, and ${name[-1]} at ${price[-1]}.";
      console.log(str);
    }
  }
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
