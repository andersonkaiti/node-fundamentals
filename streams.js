const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

/**
 * Streams herdam métodos da classe Event Emitter
 * O Event Emitter nos permite adicionar listeners para os eventos
 */

/**
 * Com a codificação UTF-8, cada caracter tem 1 byte, então,
 * como uma stream consegue armazenar por padrão 64 KB, apenas um
 * chunk é o suficiente para transferir uma frase
 * como "Hello, Codevolution". No entanto, se configurarmos no objeto
 * a propriedade highWaterMark para 2, por exemplo, os chunks terão
 * apenas 2 bytes de comprimento.
 */
const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

// movendo de uma readableStream, para uma transform stream e depois para uma writableStream
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);

/**
 * O readableStream emite um evento de dados que
 * podemos escutar ao criar um ouvinte com o método on
 */

// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });