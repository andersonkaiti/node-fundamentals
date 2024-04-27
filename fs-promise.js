const fs = require("node:fs/promises");

/**
 * A versão de callbacks ("node:fs") é preferível em vez das promise apis ("node:fs/promises")
 * em relação à performance e ao tempo de execução
 */

async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

readFile();

// console.log("first");

// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error));

// console.log("second");

// const fs = require("node:fs");

// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
// console.log("third");

// fs.writeFileSync("./greet.txt", "Hello, World!");

// fs.writeFile("./greet.txt", " Hello, Vishwas!", { flag: "a" }, (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("File written");
//     }
// });