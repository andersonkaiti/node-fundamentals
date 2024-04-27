const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking ${size} a pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

// /**
//  * node:events retorna uma classe chamada de Event Emitter que
//  * encapsula funcionalidades no Emit Event e responde o evento
//  */
// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// // criando um evento com o método on
// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking ${size} a pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//     if(size === "large") {
//         console.log("Serving complimentary drink");
//     }
// });

// console.log("Do work before event occurs");

// emitter.emit("order-pizza", "large", "mushroom");