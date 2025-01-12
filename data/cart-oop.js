function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
    // loadFromStorage: function() {}
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))
      
      if (!this.cartItems) {
        this.cartItems = [{
              productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity: 2,
              deliveryOptionId: '1'
          }, {
              productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
              quantity: 1,
              deliveryOptionId: '2'
      }]
      }
      
    },
  
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
    },
  
    addToCart(productId) {
      let amountSelected = document.querySelector(`.js-quantity-selector-${productId}`);
      
      // Check if the quantity selector exists
      if (!amountSelected) {
          console.error(`Quantity selector for product ID ${productId} not found.`);
          amountSelected = 1;
      }
  
      const selectedQuantity = Number(amountSelected.value);
  
      // If the selected quantity is not a valid number or less than 1, default to 1
      const quantityToAdd = (isNaN(selectedQuantity) || selectedQuantity < 1) ? 1 : 1;
  
      let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);
  
      if (matchingItem) {
          matchingItem.quantity += quantityToAdd;
      } else {
          this.cartItems.push({
              productId: productId,
              quantity: quantityToAdd,
              deliveryOptionId: '1'
          });
      }
  
      this.saveToStorage();
      console.log(`Added ${quantityToAdd} of product ID ${productId} to the cart.`);
    },
  
  
    deleteFromCart(productId) {
      const newCart = []
    
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem)
        }
      })
    
      this.cartItems = newCart
      this.saveToStorage()
    },
    
    updateQuantity(productId, newQuantity) {
    let matchingItem = cart.find(cartItem => cartItem.productId === productId);
      if (newQuantity > 0 && newQuantity <= 1000) {
        if (matchingItem) {
          matchingItem.quantity = newQuantity;
          this.saveToStorage();
        } else {
          console.error(`Product with ID ${productId} not found in cart.`);
        }
        console.log()
      } else {console.log('fuck off')}
    },
  
    updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    this.saveToStorage()
    }
  
  };

  return cart
}

const cart = Cart('cart-oop')
const businessCart = Cart('cart-business')



cart.loadFromStorage()



businessCart.loadFromStorage()

console.log(cart)
console.log(businessCart);