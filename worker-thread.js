const { parentPort } = require("node:worker_threads");

let j = 0;
for(let i = 0; i < 6_000_000_000; i++) {
    j++;
}

parentPort.postMessage(j);