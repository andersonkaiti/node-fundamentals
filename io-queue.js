const fs = require("node:fs");

/**
 * No código-fonte do DOMTimer, o código é o seguinte:
 *
 * double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond);
 *
 * Sendo: static const double oneMillisecond = 0.001;
 *
 * Ou seja, o intervalo, mesmo sendo 0, será convertido para 1 milissegundo
 */

// EXPERIMENT 8
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// EXPERIMENT 7
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// EXPERIMENT 9
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2_000_000_000; i++) {}