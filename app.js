const menu = [
  { name: Cheese, price: 2.5 },
  { name: Pepperoni, price: 3.0 },
  { name: Veggie, price: 3.5 },
];

const cashInRegister = 100;
const nextOrderId = 1;
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
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

//create a complete order function

const completeOrder = (orderId) => {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
