/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cartonOfCherries = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 1111,
  image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/cherry.jpg?raw=true"
};

const cartonOfStrawberries = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 2222,
  image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/strawberry.jpg?raw=true"
};

const bagOfOranges = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 3333,
  image: "https://github.com/udacity/cd2073-intro-to-js-1-project-starter/blob/main/starter/src/images/orange.jpg?raw=true"
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

// Adding products to the array 
products.push(cartonOfCherries, cartonOfStrawberries, bagOfOranges);

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  // finding product based on productID
  const product = products.find(item => item.productId === productId);

  // Is the product in the products array
  if (product) {
    product.quantity += 1;
    // check if product is in cart, otherwise to push it
    const productInCart = cart.find(item => item.productId === productId);

    // if not in cart, push product
    if (!productInCart){
      cart.push(product);
    }
  } 
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // finding product by productId
  const product = products.find(item => item.productId === productId);

  // check if product in the products array, and if so, increment by one
  if (product) {
    product.quantity += 1;
  } 
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // finding product in array by productId
  const product = products.find(item => item.productId ===productId);

  // Check if product in the prod array, and if so, decrease by 1
  if (product) {
    if(product.quantity > 0) {
      product.quantity -= 1;
    }

    // remove from cart if less than 0 products
    if (product.quantity === 0) {
      const productIndex = cart.findIndex(item => item.productId === productId);
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
      }
    }
  } 
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  // find product in array productId
  const product = products.find(item => item.productId === productId);

  // if product exists, then
  if (product) {
    product.quantity = 0;

    // find and remove from cart
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
    }
  } 
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity; 
  },0);
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.length = 0; // setting to 0 empties the cart
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  // total price in cart
  const ttlCost = cartTotal();

  // checking balance
  const balance = amount - ttlCost;

  // if balance positive, give change. If balance negative, needs to pay.
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
