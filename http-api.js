const http = require("node:http");
const fs = require("node:fs");

/**
 * O módulo http também herda da classe Event Emitter,
 * então a callback recebida é um ouvinte de requisição,
 * ou seja, sempre que uma requisição chega no servidor,
 * a callback é executada
 */
const server = http.createServer((req, res) => {
    // req.method GET POST PUT DELETE
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About page");
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            firstName: "Bruce",
            lastName: "Wayne"
        }));
    } else if (req.url === "/name") {
        const name = "Vishwas";
        res.writeHead(200, { "Content-Type": "text/html" });
        // fs.createReadStream(__dirname + "/index.html").pipe(res);
        let html = fs.readFileSync("./index.html", "utf-8");
        html = html.replace("{{name}}", name);
        res.end(html);
    } else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

/**
 *  const superHero = {
        firstName: "Bruce",
        lastName: "Wayne"
    } 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
 */

/**
 *  const superHero = {
        firstName: "Bruce",
        lastName: "Wayne"
    } 
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superHero));
 */

/**
 *  const name = "Vishwas";
    res.writeHead(200, { "Content-Type": "text/html" });
    // fs.createReadStream(__dirname + "/index.html").pipe(res);
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
 */
