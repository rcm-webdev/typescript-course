const menu = [
  { name: Cheese, price: 2.5 },
  { name: Pepperoni, price: 3.0 },
  { name: Veggie, price: 3.5 },
];

const cashInRegister = 100;
const orderQueue = [];

const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};
