window.addEventListener("DOMContentLoaded", (event) => {


  const showCart = () => {
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItem = document.createElement('div');
    shoppingCart.appendChild(cartItem);


    for(let i = 0; i < localStorage.length; i++) {
      let food = localStorage.key(i);
      let amount = localStorage.getItem(items);

      let eats = amount;
      // console.log(food);
      // console.log(amount);
      // console.log(eats)
      cartItem.innerHTML = eats;
    }



  };

  showCart();



  // const showCart = () => {

  // };


  const storeItem = () => {
    //created a variable that stores the button(by ele id)
    const button = document.getElementById('add-to-cart');
    //created an event that listens for clicks on the A2C Button
    button.addEventListener('click', event => {
      //Created a variable that stores each item and Grabs the item by ID
      const items = document.getElementById('items');
      const testing = items.value;
      console.log(testing);
      //Created a varibale that stores each item's qty and Grabs the quantity by ID
      const quantity = document.getElementById('quantity');
      console.log(quantity);
      //At this point we use the setItem method to Store the items and their respective quantities in Local Storage
      localStorage.setItem(items, quantity);
    });
<<<<<<< Updated upstream
=======
    showCart();
  };
>>>>>>> Stashed changes

    // console.log(items.value);
    // console.log(quantity.value);
  };
  showCart();
  // const removeItem = () => {

  // };

});
<<<<<<< Updated upstream






=======
>>>>>>> Stashed changes
// test comment
