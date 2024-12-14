const menu = [
  { name: Cheese, price: 2.5 },
  { name: Pepperoni, price: 3.0 },
  { name: Veggie, price: 3.5 },
];

const cashInRegister = 100;
const orderQueue = [];

//add new pizza utility function
const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};

//create placeOrder utility function
//updates income in cashInRegister
//adds pizza order to the order queue

const placeOrder = (order) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === order);
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
};
