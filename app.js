const menu = [
  { name: Cheese, price: 2.5 },
  { name: Pepperoni, price: 3.0 },
  { name: Veggie, price: 3.5 },
];

const cashInRegister = 100;
const orderQueue = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};
