window.addEventListener("DOMContentLoaded", (event) => {


  // const showCart = () => {
  
  // };

  const storeItem = () => {
    //created a variable that stores the button(by ele id)
    const button = document.getElementById('add-to-cart');
    //created an event that listens for clicks on the A2C Button
    button.addEventListener('click', event => {
      //Created a variable that stores each item and Grabs the item by ID
      const items = document.getElementById('items');
      //Created a varibale that stores each item's qty and Grabs the quantity by ID
      const quantity = localStorage.getElementById('quantity');
      //At this point we use the setItem method to Store the items and their respective quantities in Local Storage
      localStorage.setItem(items, quantity);
    });
    showCart();     
  };

  // const removeItem = () => {

  // };

});
<<<<<<< HEAD




=======
// test comment
>>>>>>> origin/testaaron
