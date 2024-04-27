const https = require("node:https");
// const crypto = require("node:crypto");

// EXPERIMENT 5
const MAX_CALLS = 12;

const start = Date.now();
for(let i = 0; i < MAX_CALLS; i++) {
    https.request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log(`Request: ${i + 1}`, Date.now() - start);
        })
    }).end();
}

/**
 * pbkdf2: password based key derivation function 2
 */

// EXPERIMENT 1
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

// EXPERIMENT 2
// const MAX_CALLS = 3;
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100_000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

// EXPERIMENT 3
// const MAX_CALLS = 5;
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100_000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

// EXPERIMENT 4
// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100_000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }