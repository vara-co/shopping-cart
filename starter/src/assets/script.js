
// S h o p p i n g   C a r t  P r o j e c t

// Product Array with product properties
const products = [
    {
    name: "Carton of Cherries",
    price: 4,
    quantity: 0,
    productId: 1111,
    image: "https://github.com/vara-co/shopping-cart/blob/main/starter/src/images/cherriescarton.jpg?raw=true"
  },
  {
    name: "Carton of Strawberries",
    price: 5,
    quantity: 0,
    productId: 2222,
    image: "https://github.com/vara-co/shopping-cart/blob/main/starter/src/images/strawberriescarton.jpg?raw=true"
  },
  {
    name: "Bag of Oranges",
    price: 10,
    quantity: 0,
    productId: 3333,
    image: "https://github.com/vara-co/shopping-cart/blob/main/starter/src/images/orangessac2.jpg?raw=true"
  },
];

// Empty Cart array to hold products in the cart
const cart = [];

// H e l p e r   f u n c t i o n s
// Helper function - finding products by productId
function findProductsById(productId){
  return products.find(item => item.productId === productId);
}

// Helper function - finding product index in cart
function findProductInCart(productId) {
  return cart.find(item => item.productId === productId);
}

// Helper function - finding Product in Cart by Index
function findProductCartByIndex (productId) {
  return cart.findIndex(item => item.productId === productId);
}

// S h o p p i n g  C a r t  F u n c t i o n a l i t y
// Function to add products to cart by the productId
function addProductToCart(productId) {
  // finding product based on productID using helper function
  const product = findProductsById(productId); 

  // Conditional to find product in cart
  if (product) {
    product.quantity += 1;
    // check if product is in cart, otherwise to push it
    const productInCart = findProductInCart(productId);

    // if not in cart, push product
    if (!productInCart){
      cart.push(product);
    }
  } 
}

// Function to INCREASE quantity of a product by productId
function increaseQuantity(productId) {
  // finding product based on productID using helper function
  const product = findProductsById(productId); 

  // check if product in the products array, and if so, increment by one
  if (product) {
    product.quantity += 1;
  }

}

// Function to DECREASE the quantity of a product by productId
function decreaseQuantity(productId) {
  // finding product based on productID using helper function
  const product = findProductsById(productId); 

  // Conditional to check if product in the prod array, and if so, decrease by 1
  if (product) {
    if(product.quantity > 0) {
      product.quantity -= 1;
    }

    // Conditional to remove item/container from cart if less than 0 products
    if (product.quantity === 0) {
      const productIndex = findProductCartByIndex (productId);
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
      }
    }
  } 
}


// Function to REMOVE PRODUCT from cart by productId
function removeProductFromCart(productId) {
  // finding product based on productID using helper function
  const product = findProductsById(productId); 

  // Conditional to determine if product exists
  if (product) {
    product.quantity = 0;

    // Conditional to find and remove product from cart
    const productIndex = findProductCartByIndex (productId);
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
    }
  } 
}


// Function to obtain the CART TOTAL 
function cartTotal() {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity; 
  },0);
}

// Function to empty the products from the cart EMPTY CART
function emptyCart() {
  cart.length = 0; // setting to 0 empties the cart
}


// Function PAY taking amount as an argument.
// This will determine the difference that needs to be returned to the shopper, or if they still owe

// Variable to track total payment
let totalPaid = 0;

function pay(amount) {
  // Avoiding accepting negative amounts or zero
  if (amount <= 0) {
    return "Invalid payment.";
  }

  // Add amount to total amount paid
  totalPaid += amount;

  // Total in cart
  const ttlCost = cartTotal();

  // Remaining balance calculation
  const remaining = totalPaid - ttlCost;

  // Conditional to calculate positive or negative balance
  if (remaining < 0) {
    return remaining;
  } else {
    const change = remaining;
    totalPaid = 0;
    emptyCart(); // Clear cart when payment completed

    // Find out the change if any
    return change 

  }

}


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
}
