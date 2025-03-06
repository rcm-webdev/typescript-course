type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu = [
  { name: "Cheese", price: 2.5 },
  { name: "Pepperoni", price: 3.0 },
  { name: "Veggie", price: 3.5 },
];

let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: Order[] = [];

//add new pizza utility function
const addNewPizza = (pizzaObj: Pizza) => {
  menu.push(pizzaObj);
};

//create placeOrder utility function
//updates income in cashInRegister
//adds pizza order to the order queue

const placeOrder = (order: string) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === order);
  if (!selectedPizza) {
    console.error(`${order} does not exist in the menu`);
    return;
  }
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

const completeOrder = (orderId: number) => {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
