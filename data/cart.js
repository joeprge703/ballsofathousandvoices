export let cart

loadFromStorage()



export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'))

if (!cart) {
  cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
}]
}

}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}



export function addToCart(productId) {
        
    let matchingItem

    const amountSelected = document.querySelector(`.js-quantity-selector-${productId}`)
    
    if (amountSelected) {
        const selectedQuantity = Number(amountSelected.value);

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem
        }
      });

      if (matchingItem) {
        matchingItem.quantity += selectedQuantity
      } else {
        cart.push({
          productId: productId,
          quantity: Number(amountSelected.value),
          deliveryOptionId: '1'
        })
      }

      
      

      saveToStorage()
      console.log(amountSelected.value)
    } else {
      

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1
    } else {
      cart.push({
        productId: productId,
        quantity: Number(1),
        deliveryOptionId: '1'
      })
    }

    
    

    saveToStorage()
    
    }

    

}


export function deleteFromCart(productId) {
  const newCart = []

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })

  cart = newCart
  saveToStorage()
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem = cart.find(cartItem => cartItem.productId === productId);

  if (newQuantity > 0 && newQuantity <= 1000) {
    if (matchingItem) {
      matchingItem.quantity = newQuantity;
      saveToStorage();
    } else {
      console.error(`Product with ID ${productId} not found in cart.`);
    }
    console.log()
  } else {console.log('fuck off')}
  
}


export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage()
}

export async function loadCartFetch() {
  await fetch('https://supersimplebackend.dev/cart')
   .then((response) => {
    console.log(response);
   })
}


export function loadCart(fun) {
  const xhr = new XMLHttpRequest
  // opens a request
  xhr.open('GET', 'https://supersimplebackend.dev/cart')

  // hello im gonna code some bullshit i dont understand 25.12.24s


  xhr.addEventListener('load', () => {
    console.log(xhr.response);

    console.log('load products')

    fun()
  })
  // sends the request
  xhr.send()
}