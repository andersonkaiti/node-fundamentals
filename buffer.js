const professor = "Vishwas";

for(let character of professor) {
    console.log(
        `${character}: ${character
            .charCodeAt()
            .toString()
            .padStart(4, " ")} | binary: ${character
                .charCodeAt()
                .toString(2)
                .padStart(8, "0")}`
        );
}

const buffer = new Buffer.from(professor);

// sobrescreve o valor do buffer com Anderson,
// mas o nome é cortado pois o buffer tem apenas 7 de largura
buffer.write("Anderson");

// converte os valores do buffer para uma string
console.log(buffer.toString());
// exibe os valores em hexadecimal do código ascii correspondente
console.log(buffer);
// exibe os códigos ascii correspondentes
console.log(buffer.toJSON());