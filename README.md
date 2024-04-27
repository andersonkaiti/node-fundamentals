# Origem do JavaScript e do ECMAScript

- Em `1993`, o `primeiro navegador` com uma `interface de usuário`, chamado `Mosaic`, foi disponibilizado.
- Em `1994`, os líderes de desenvolvimento do Mosaic fundaram uma empresa chamada `Netscape` e disponibilizaram um `navegador mais polido`, chamado `Netscape`.
- As páginas apenas eram `estáticas` e sem interatividade.
- Em `1995`, para solucionar isso, a `Netscape` criou uma nova `linguagem de script` chamada de `JavaScript`.
- `Brendan Eich` criou um `protótipo funcional` dela em `10 dias` para apresentá-la como contraproposta de outra ideia em desenvolvimento na Netscape, que se tratava da criação de uma linguagem com sintaxe parecida com o Java.
- O nome foi escolhido por questões de `marketing`, pois a linguagem popular na época era o `Java` e a Netscape tinha uma pareceira com a `Sun Microsystems`.
- Em `1995`, a `Microsoft` liberou o `Internet Explorer` e percebeu que o JavaScript mudou a experiência do usuário e queria fazer a mesma coisa com o Internet Explorer.
- Em `1996`, a Microsoft fez engenharia reversa no interpretador do navegador e criou a própria linguagem de script, o `JScript`.
- A partir disso surgiu um problema, porque as diferenças entre as linguagens dificultou os desenvolvedores de desenvolver sites que funcionassem em ambos os navegadores.
- Em novembro de `1996`, o JavaScript foi `padronizado` pela `ECMA International`.
- A Netscape queria uma `especificação padrão` à qual todos os navegadores pudessem seguir, pois isso ajudaria a manter outros implementações `consistentes` em todos os navegadores.
- No entanto, a ECMA decidiu utilizar o termo `"ECMAScript"` para se referir à linguagem oficial, pois a Oracle (que adquiriu a Sun Microsystems) detém a `marca registrada` do termo `"JavaScript"`.
- ECMAScript se refere à `linguagem padrão`, enquanto JavaScript é o que usamos na prática e é construído sobre o ECMAScript.

- ECMA-262 é a especificação da linguagem.
- ECMAScript é a linguagem que implementa o ECMA-262.

# ECMAScript Versions

- 1997 - ECMAScript 1.
- 1998 - ECMAScript 2.
- 1999 - ECMAScript 3.
- ECMAScript 4 never released.
- 2009 - ECMAScript 5.
- 2015 - ECMAScript 2015 (ES6).

# V8

O JavaScript não pode ser entendido pelo computador, então ele precisa de um `engine`, que `converte o código-fonte em código de máquina`.

- `V8 - Google Chrome.`
- `SpiderMonkey - Firefox.`
- `JavaScript Core - Safari.`
- `Chakra - Microsoft Edge.`

O `V8`, criado em `2008`, foi escrito em `C++` e pode rodar de forma `independente`, além de poder ser `incorporado` a `programas C++` para adicionar novas funcionalidades. Como a `linguagem C++` é boa para lidar com `operações` em `baixo nível` como `lidar com arquivos`, `conexões com bancos de dados` e `operações de rede`, ao incorporar o V8 com o seu `próprio programa C++`, você tem o poder de adicionar novas funcionalidades ao JavaScript. Ele é um dos componentes presentes no Node.js.

# Funcionamento do Node.js

```
                📄 javascript code
                        ↓
  ┌──────────────────────────────────────────────┐
  │ ┌───────────────┐        ┌─────────────────┐ │
  │ │ v8 javascript │        │                 │ │
┌─┼─┤               │───────>│ web/browser API ├─┼───> DOM
│ │ │     engine    │        │                 │ │     storage
│ │ └───────────────┘        └─────────┬───┬───┘ │     timers
│ │      ↑                             │   │     │
│ │    ╭─┴─╮                           │   │     │
│ │    ↓   ↑                           │   │     │
│ │    ╰───╯                           │   │     │
│ │      ↑  ┌─────────────────────┐    │   │     │
│ │      ├──│   microtask queue   │<───┘   │     │
│ │      │  └─────────────────────┘        │     │
│ │      │  ┌─────────────────────┐        │     │
│ │      └──│ callback/task queue │<───────┘     │
│ │         └─────────────────────┘              │
│ └──────────────────────────────────────────────┘
│
│    ┌──────────────────────────┐
└───>│   v8 javascript engine   │
     │ ┌────────┐ ┌───────────┐ │
     │ │ memory │ │ callstack │ │
     │ └────────┘ └───────────┘ │
     └──────────────────────────┘
```

Um `JavaScript Runtime` é um `ambiente` que fornece todos os `componentes` necessários para `executar` um programa JavaScript `fora do navegador`.

Apenas um engine de JavaScript não é suficiente, pois ele pode executar ECMAScript, mas o JavaScript que conhecemos é o ECMAScript mais as Web APIs (console.log, setTimeout, DOM APIs etc.).

# Estrutura do Node.js

```
                📄 javascript code
                        ↓
┌───────────────────────────────────────────┐
│                   node.js                 │
│ ┌───────────────────────────────────────┐ │
│ │           javascript library          ├─┼─> lib
│ └───────────────────────────────────────┘ │
│ ┌───────────────────────────────────────┐ │
│ │             C/C++ features            ├─┼─> src
│ └───────────────────────────────────────┘ │
│ ┌───────────────────────────────────────┐ │
│ │             dependencies              │ │
│ │ ┌────┐ ┌───────┐ ┌───────┐ ┌────────┐ │ │
│ │ │ v8 │ │ libuv │ │ zlib  │ │ crypto │ ├─┼─> deps
│ │ └────┘ └───────┘ └───────┘ └────────┘ │ │
│ └───────────────────────────────────────┘ │
└───────────────────────────────────────────┘
```

O `src` consiste em `arquivos C++` que adicionam `recursos novos`, como lidar com o acesso ao sistema de arquivos e com redes, enquanto a `lib` consiste em arquivos JavaScript que `expõem` esses recursos novos para `fácil consumo` a partir de `APIs`.

# Sobre o Node.js

- `Open-source:` o código-fonte é disponível publicamente para compartilhamento e modificação.
- `Cross plataform:` disponível no Mac, Windows e Linux.
- `JavaScript Runtime Environment.`
- `Não é uma linguagem e nem um framework.`
- `Foi criado em 2009 por Ryan Dahl.`

# Maneira de executar o JavaScrpt: REPL

```
> console.log("Hello, World!");
Hello, World!
undefined
```

REPL:

- Read.
- Evaluate.
- Print (o undefined do exemplo acima é o retorno do console.log()).
- Loop.

# Browser vs. Node.js

- No navegador, estamos quase o tempo todo interagindo com o DOM ou outras APIs, como cookies. No entanto, no Node.js não existe o document, nem o window e nenhum dos objetos fornecidos pelo navegador.
- No navegador, não temos acesso às APIs que o Node.js fornece, como o file system.
- Com o Node.js, você controla o ambiente.

# Modules

- `Module:` é um pedaço de código encapsulado e reutilizável que contém seu próprio contexto.

Tipos de módulos

- `Local modules:` módulo que eu mesmo criei.
- `Built-in modules:` módulos do próprio Node.js.
- `Third party modules:` módulos escritos por outros desenvolvedores que podem ser usados por nós.

No Node.js, cada `arquivo` é um `módulo` com `escopo próprio` por padrão.

# CommonJS

É um padrão que define como um módulo deve ser estruturado e compartilhado.

# Require

Para importar um módulo local, basta utilizar a função `require` junto com `"./"`, e sem especificar a extensão .js (o Node.js irá adicioná-la automaticamente).

add.js:

```
const add = (a, b) => {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);
```

index.js:

```
require("./add");

console.log("Hello from index.js");
```

```
output:
> 3
> Hello from index.js
```

No entanto, o require apenas está chamando o arquivo add.js para ser executado.

# Module.exports

Para expor certas funcionalidades, basta utilizar o objeto module.exports e fazer ele receber a função que queremos reutilizar.

```
const add = (a, b) => a + b;

module.exports = add;
```

```
const add = require("./add");

console.log("Hello from index.js");
const sum = add(1, 2);
const sum2 = add(2, 3);
console.log(sum);
console.log(sum2);
```

```
output:
> Hello from index.js
> 3
> 5
```

# Module escope

Cada módulo tem o seu próprio escopo

- Quando o arquivo.js é carregado, o Node.js o envolve em uma função anônima:

```
(function(exports, require, module, __filename, __dirname) {
    const superHero = "Batman";
    console.log(superHero);
});
```

- \_\_filename é o caminho até o arquivo.
- \_\_dirname é o caminho até o diretório.

# Module caching

Quando importamos um módulo, ele é carregado e armazenado em cache para posterior uso. Ao importá-lo de novo, o outro objeto é reutilizado sem criar uma nova instância e, como objetos são armazenados como referência, obtemos o mesmo objeto com o nome modificado para "Superman".

```
class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = new SuperHero("Batman");
```

```
const superHero = require("./super-hero");
console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName());
```

```
output:
> Batman
> Superman
> Superman
```

# Import Export Patterns

`1º pattern:`

```
const add = (a, b) => {
    return a + b;
}

module.exports = add;
```

```
const add = require("./math");

console.log(add(2, 3));
```

`2º pattern:`

```
module.exports = add = (a, b) => {
    return a + b;
}
```

```
const add = require("./math");

console.log(add(2, 3));
```

`3º pattern:`

```
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

```
const math = require("./math");

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
```

`Com desestruturação:`

```
const math = require("./math");

const { add, subtract } = math;

console.log(add(2, 3));
console.log(subtract(2, 3));
```

`4º pattern:`

```
module.exports.add = (a, b) => a + b;

module.exports.subtract = (a, b) => a - b;
```

`5º pattern:`

```
exports.add = (a, b) => a + b;

exports.subtract = (a, b) => a - b;
```

# Module.exports vs. exports

Para exportar um módulo com module.exports, basta atribuir a ele um objeto contendo as funcionalidades a serem exportadas, no entanto, isso não funciona para o exports.

No seguinte exemplo, temos o `objeto obj1`. Em seguida, ocorre a declaração do `objeto obj2`, que recebe a `referência de obj1`. No entanto, obj2 recebe um `novo objeto` contendo a propriedade nome com valor "Clark Kent". Inicialmente, obj1 e obj2 armazenavam a `mesma referência` de objeto, mas obj2 recebeu a `referência de outro objeto`, então os `valores` deles `não são mais os mesmos`. Esse mesmo comportamento ocorre com o module.exports e o exports. `Ambos armazenam a mesma referência`, mas se o exports receber um `novo objeto` em vez de apenas ter uma `propriedade adicionada ou alterada`, o valor de `module.exports não é alterado`.

```
const obj1 = {
    name: "Bruce Wayne"
}

let obj2 = obj1;
obj2 = {
    name: "Clark Kent"
}
```

Caso a exportação seja feita corretamente:

`math.js:`

```
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

module.exports = {
    add,
    subtract
};
```

`index.js:`

```
const math = require("./math");

const { add, subtract } = math;

console.log(add(2, 3));
console.log(subtract(2, 3));
```

```
output:
module.exports = { add, subtract }
exports = { add, subtract }
```

Caso ela seja feita com exports sem alterar ou adicionar uma propriedade, mas sim atribuindo a ele outro objeto:

`math.js:`

```
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

exports = {
    add,
    subtract
};
```

```
output:
module.exports = { }
exports = { add, subtract }
```

# CommonJS e ES Modules

No CommonJS, cada arquivo é tratado como um módulo. Variáveis, funções, classes etc. não são acessíveis a outros arquivos por padrão. É necessário declarar explicitamente para o sistema de módulos quais partes do código devem ser exportadas via module.exports ou exports. Para importar um código em um arquivo, basta utilizar a função require.

ES Modules é o padrão ECMAScript para módulos introduzido com o ES2015 e é suportado pelo Node.js 14 para cima. Em vez de utilizar module.exports, utiliza-se a palavra reservada exports. O export pode ser default ou nomeado. Para importar variáveis ou funções, basta utilizar a palavra reservada import. Se o export for default export, podemos atribuir qualquer nome enquanto importamos, mas se o export for nomeado, o nome de importação deve ser o mesmo. Para utilizá-lo, basta criar um arquivo com a extensão .mjs, ou adicionar type: "module" no arquivo package.json.

# JSON

JavaScript Object Notation.

É um formato de troca de dados comumente utilizado com servidores web.

# Watch mode

Na versão 18, o Node.js introduziu o watch mode. Executar o programa em watch mode reinicia o processo toda vez que uma alteração for realizada no código.

```
node --watch index.js
```

# Como lidar com o caminho do arquivo

Para importar, basta usar `require("path")` ou `require("node:path")`, mas o segundo é melhor, porque deixa claro que é um `módulo do Node.js`.

- `path.basename:` o conteúdo depois da última barra.
- `path.extname:` a extensão do conteúdo.
- `path.parse:` retorna um objeto contendo todas as informações do caminho para aquele arquivo.

```
{
  root: 'C:\\',
  dir: 'C:\\Users\\o.o\\Desktop\\node-fundamentals',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
```

- `path.format(path.parse):` retorna o caminho no formato padrão com base no objeto retornado.

```
console.log(path.format(path.parse(__filename)));

C:\Users\o.o\Desktop\node-fundamentals\path.js
```

- `path.isAbsolute():` verifica se o caminho é absoluto ou não, ou seja, se a localização de um arquivo ou diretório é em `relação à raiz` do sistema de arquivos, como `"/"` no `Linux` e `"C:"` no `Windows`.

```
Absoluto: C:\Users\o.o\Desktop\node-fundamentals\path.js
Não absoluto: node-fundamentals\path.js
```

- `path.join:` concatena e realiza as formatações no caminho, como inverter as barras dependendo do sistema operacional:

```
console.log(path.join("folder1", "folder", "index.html"));

folder1\folder\index.html
```

- `path.resolve:` concatena, realiza as formatações no caminho e o torna absoluto.

# Callback

No JavaScript, `funções` são `first class objects`, então elas podem ser tratadas da mesma forma que qualquer outro tipo de objeto.

- Uma função pode ser passada como `argumento de uma função`.
- Uma função também pode ser `retornada` como `valor de outra função`.

Tipos de Callbacks:

- Synchronous.
- Asynchronous: usada para `continuar` ou resumir a execução do código depois de uma operação assíncrona completar.

greetVishwas é uma HOT (High Order Function), ou seja, ela aceita uma função como argumento, enquanto greetFn é uma callback, ou seja, ela pode ser passada como argumento de outra função.

```
function greet(name) {
    console.log(`Hello, ${name}`);
}

function highOrderFunction(callback) {
    const name = "Vishwas";
    callback(name);
}

highOrderFunction(greet);
```

Na última linha, em `addEventListener`, a função callback é assíncrona, pois somente é executada quando o usuário clica no botão do _site_.

```
function callback() {
    document.getElementById("demo").innerHTML = "Hello, World";
}

document.getElementById("btn").addEventListener("click", callback);
```

A callback define a lógica que a high order function precisa aplicar em si mesma.

```
let numbers = [1, 2, 3, 4, 5, 6];
numbers.sort((a, b) => a - b);
```

# Event Module

- Permite trabalhar com `eventos` no Node.js.
- Um evento é uma ação ou uma ocorrência que pode acontecer na nossa aplicação.
- Com o módulo events, nós podemos executar nossos próprios eventos e respondê-los de forma não bloqueante.

Uma classe criada por nós pode herdar o método e atributos da classe EventEmitter.

Muitos dos `módulos nativos` do Node.js, como o `fs`, `streams` e `http` também herdam a `classe EventEmitter`.

O `node:events` retorna uma `classe` chamada `EventEmitter` que encapsula funcionalidades para emitir eventos e responder aos eventos. Para utilizá-lo, basta criar um objeto da classe utilizando o `construtor EventEmitter()`, criar um `ouvinte` utilizando o `método on` do objeto com o nome do evento a ser emitido como uma string e a callback a ser executada e, por fim, `emitir` o evento utilizando o `método emit` do objeto.

```
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking ${size} a pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
    if(size === "large") {
        console.log("Serving complimentary drink");
    }
});

console.log("Do work before event occurs");

emitter.emit("order-pizza", "large", "mushroom");
```

# Extending from EventEmitter

```
const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;
```

```
class DrinkMachine {
    serveDrink(size) {
        if(size === "large") {
            console.log("Serving complimentary drink");
        }
    }
}

module.exports = DrinkMachine;
```

```
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
```

# Character Sets and Enconding

Computadores armazenam e representam dados no formato binário, ou seja, 0s e 1s.

```
4 ->   1        0       0
    2² · 1 + 2¹ · 0 + 2 · 0
       4   +    0   +   0 = 4
```

Como um caractere é representado em binário?

- O computador primeiro `converte` o `caractere em um número`, então converte o `número` para a sua `representação em binário`.
- `character code:` "U".charCodeAt(): 85
- `character:` String.fromCharCode(85): "U"

Mas como o computador sabe que o número representa o caractere?

# Character Sets

- É uma `lista pré-definida` de `caracteres representados por números`.
- Exemplos: UNICODE e ASCII.

# Character Encoding

- Dita como um `número deve ser representado em binário`.
- Quantos bits usar para representar um número.
- Um exemplo é o UTF-8, que afirma que os caracteres devem ser codificados em bytes (8 bits).

```
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
```

```
V:   86 | binary: 01010110
i:  105 | binary: 01101001
s:  115 | binary: 01110011
h:  104 | binary: 01101000
w:  119 | binary: 01110111
a:   97 | binary: 01100001
s:  115 | binary: 01110011
```

# Streams

- É uma `sequência de dados` que está se movendo de um ponto a outro.
- Processar `streams` de dados em `chunks` em vez de esperar que todos os dados estejam (exemplo: vídeos no YouTube).

O conteúdo vem em `chunks` e você transfere em chunks enquanto o restante dos dados viajam ao longo do tempo.

# Buffer

Buffer é `onde os dados ficam` enquanto ainda `não são enviados para o destinatário`. Para utilizá-lo (não é necessário importar com require ou import), basta utilizar o `construtor Buffer` com `o método estático .from` e passar os `dados como argumento`.

```
const professor = "Vishwas";

const buffer = new Buffer.from(professor);
```

Após a criação do buffer, é possível `sobrescrever` o valor presente nele por `"Anderson"`, por exemplo, mas o nome é `cortado` pois o buffer tem apenas `7 de largura`.

```
buffer.write("Anderson");
```

É possível converter os dados do buffer em uma `string legível` utilizando o `método .toString()`.

```
console.log(buffer.toString());
```

O valor do buffer exibido no 1º console.log são os valores em `hexadecimal do código UTF-16` correspondente de cada caractere da string. Com o `método toJSON()`, é possível exibir os códigos caracteres correspondente em `base decimal` dentro de um objeto.

```
console.log(buffer): <Buffer 41 6e 64 65 72 73 6f>

console.log(buffer.toJSON()):
{
  type: 'Buffer',
  data: [
     65, 110, 100,
    101, 114, 115,
    111
  ]
}
```

# Asynchronous JavaScript

O JavaScript é uma linguagem síncrona, bloqueante e single-threaded.

- Synhchronous: cada linha é executada por vez, de cima para baixo.
- Blocking: não importa quanto tempo um processo leve para ser finalizado, os processos subsequentes não iniciarão até que o primeiro seja concluído.
- Single-threaded: uma thread é um processo que o JavaScript pode usar para executar uma tarefa, e cada thread pode executar apenas uma tarefa por vez. O JavaScript possui apenas uma thread, que é chamada de main thread.

Por isso, para lidar com operações que levam tempo, apenas o JavaScript não é o suficiente, e é aqui que o `Node.js entra em ação`.

# File system (fs)

O módulo fs, ou file system, serve para lidar com operações do sistema de arquivos, como leitura e escrita, tanto de forma síncrona como assíncrona.

Para importar, basta utilizar require("node:fs").

```
const fs = require("node:fs");
```

# Ler o arquivo de forma síncrona

Basta utilizar o método `readFileSync`, adicionar o caminho do arquivo e a codificação dos caracteres. Caso a codificação não seja adicionada, o conteúdo de fileContents será um buffer.

```
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);
```

# Ler o arquivo de forma assíncrona

Basta utilizar o método `readFile`, adicionar o caminho do arquivo, a codificação dos caracteres e uma `callback` contendo como parâmetro a variável error e data.

```
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
```

# Escrever no arquivo de forma síncrona

```
fs.writeFileSync("./greet.txt", "Hello, World!");
```

# Escrever no arquivo de forma assíncrona

Basta utilizar o método `writeFile`, adicionar o caminho do arquivo, o texto a ser escrito e uma callback que contém o erro, se houver. No entanto, esse método `sobrescreve por padrão` o texto de um arquivo. Para não sobrescrever, basta adicionar um `objeto` como 3º parâmetro que conterá a `propriedade flag com o valor "a"`, que significa `append`.

```
fs.writeFile("./greet.txt", " Hello, Vishwas!", { flag: "a" }, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("File written");
    }
});
```

# Fs promises

Para ler e escrever em arquivos, é possível utilizar apenas o módulo node:fs, mas existe outro módulo do fs baseado em `promessas`.

Para importar, basta utilizar `require("node:fs/promises")`.

```
const fs = require("node:fs/promises");
```

Para ler um arquivo, basta fazer a mesma coisa que no node:fs, mas, em vez de adicionar uma callback, basta adicionar then e catch.

```
fs.readFile("./file.txt", "utf-8")
.then(data => console.log(data))
.catch(error => console.log(error));
```

# Fs promises com async e await

Da mesma forma, também é possível substituir por async e await.

```
async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

readFile();
```

`Em relação a performance, a versão do fs com callback é melhor que a versão das promises APIs do fs.`

# Streams com fs

`Streams` são uma sequência de dados que estão se movendo de um ponto a outro, sendo que o conteúdo enviado é dividido e transferido em `chunks`. Ou seja, elas nos permitem trabalhar com chunks de dados em vez de grandes quantidade de dados de uma vez.

Streams herdam alguns recursos da classe Event Emitter, então elas permitem adicionar ouvintes a eventos. No código abaixo, a readableStream ouve um evento chamado "data", que indica que os dados estão sendo lidos, e contém uma callback que recebe o chunk lido em UTF-8. Dentro da callback, o valor do chunk é exibido e utiliza-se a writableStream para escrever o conteúdo do chunk no arquivo file2.txt.

Com a codificação UTF-8, cada caractere tem 1 byte, então, como uma stream consegue armazenar por padrão 64 KB, apenas um chunk é o suficiente para transferir uma frase como "Hello, Codevolution". No entanto, se configurarmos no objeto a propriedade highWaterMark para 2, por exemplo, os chunks terão apenas 2 bytes de comprimento.

```
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
```

# Pipes

É possível simplificar o uso de streams com pipes.

```
readableStream.pipe(writeableStream);
```

# Tipos de Streams

- Readable Streams, dos quais os dados podem ser lidos.
- Writable Streams, nos quais podemos escrever dados.
- Duplex Streams, que são tanto Readable como Writable Streams.
- Transform Streams, que podem modificar ou transformar os dados conforme são escritos e lidos.

# Como a web funciona

- Computadores conectados à internet são chamados de clientes e servidores.
- Clientes são dispositivos conectados à internet, como computadores ou celulares, e que contêm softwares que permitem acessar a web, como um navegador.
- Servidores, por outro lado, são computadores que armazenam web pages, sites ou apps.

```
        client server model

┌────────┐    request    ┌────────┐
│        │──────────────>│        │
│ client │               │ server │
│        │<──────────────│        │
└────────┘    response   └────────┘
```

# HTTP

- Hypertext Transfer Protocol.
- É um protocolo que define um formato para o cliente e os servidores se comunicarem.

É possível criar um web server com Node.js, pois ele possui acesso a funcionalidades do sistema operacional, como operações de rede. Além disso, o Node.js contém o event loop que executa tarefas assincronamente e que é perfeito para criar web servers que simultaneamente podem lidar com largos volumes de requisições.

Basta importar o `módulo http`, utilizar o `método createServer` para criar um servidor e o `método listen` para ouvir uma porta específica. Sendo assim, o objeto Server retornado pelo método createServer é um EventEmitter. A função handler passada como callback no ouvinte "request" é executada toda vez que uma requisição HTTP é feita para o servidor e ela contém dois objetos bem úteis: o request, que contém várias propriedades, e o response, que contém vários métodos.

```
const http = require("node:http");

const handler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
}

const server = http.createServer();
server.on("request", handler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});

```

`O programa não se encerra, ele espera por requisições na porta 3000.`

# JSON response

É possível responder com JSON. No seguinte exemplo, um objeto superHero foi criado e, para enviá-lo como resposta, ele foi convertido para JSON e o Content-Type presente no head foi alterado para "application/json".

```
const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});
```

# HTML Response

Para responder com HTML, basta alterar o Content-Type para text/html.

```
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, World!</h1>");
});
```

Também é possível ler um documento HTML com o método readFileSync e enviá-lo como respostas. No entanto, o método lê todo o arquivo de uma vez e armazena todo o conteúdo em um buffer temporário, o que pode causar um uso desnecessário de mémória.

```
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = fs.readFileSync("./index.html", "utf-8");
  res.end(html);
});
```

Para resolver o problema acima, basta utilizar streams. Geralmente, quando utilizamos streams, criamos uma readableStream e uma writableStream para indicar a fonte dos dados e onde ele serão escritos, respectivamente. No entanto, o parâmetro `response` já é uma writableStream, então basta adicioná-lo como argumento do pipe.

```
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "./index.html").pipe(res);
});
```

# HTML Template com valores dinâmicos

Para utilizar valores dinâmicos, basta ler o conteúdo do arquivo, utilizar string replacement e enviar o arquivo com o valor alterado.

```
const server = http.createServer((req, res) => {
  const name = "Vishwas";
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});
```

# HTTP Rounting

O request contém uma propriedade chamada url, que indica a rota acessada, ou a `query string`. Então se o usuário navegar até a rota localhost:3000, a resposta será /, e, se ele navegar até a rota localhost:3000/about, a resposta será /about. Por conta disso, é possível adicionar roteamento utilizando ifs.

```
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
```

# Web Framework

Um framework abstrai códigos de baixo nível permitindo que o desenvolvedor foque nos requisitos e não tanto no código.

Angular, React e Vue são frameworks/bibliotecas que ajudam a construir interfaces de usuário sem precisar de depender do DOM, que é uma API de baixo nível. Da mesma forma, existem frameworks para construir aplicações web ou mobile sem precisar depender do módulo HTTP do Node.js.

# Libuv

- É uma biblioteca open source e multiplataforma escrita em C.
- Ela lida com operações assíncronas e não bloqueantes graças a dois recursos importantes: a Thread Pool e o Event Loop.

# Thread Pool

O thread pool é um conjunto de threads que o Node.js utiliza para transferir tarefas demoradas e garantir que a main thread não seja bloqueada por muito tempo.

```
┌─────────────┐         ┌───────────────────┐
│ main thread │         │      libuv        │
│             │         │ ┌───────────────┐ │
│          ───┼─────────┼>│  thread pool  │ │
│             │         │ │               │ │
│          <──┼─────────┼─┤               │ │
│             │         │ └───────────────┘ │
└─────────────┘         └───────────────────┘
```

# Synchronous Methods Execution

```
crypto.pbkdf2Sync("password", "salt", 100_000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100_000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100_000, 512, "sha512");
```

```
    ↑
    │            ┌─────┐
fn 3│            │     │
    │            └─────┘
    │     ┌─────┐
fn 2│     │     │
    │     └─────┘
    ├─────┐
fn 1│     │
    ├─────┘
    └──────────────────────>
          t     2t     3t
```

Todo método no Node.js que contém o sufixo "sync" sempre é executado na main thread e é bloqueante.

# Asynchronous Methods Execution

```
const MAX_CALLS = 3;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100_000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
```

```
    ↑
    ├─────┐
fn 3│     │
    ├─────┘
    ├─────┐
fn 2│     │
    ├─────┘
    ├─────┐
fn 1│     │
    ├─────┘
    └──────────────────────>
          t     2t     3t
```

Alguns métodos como fs.readFile e crypto.pbkdf2 executam em uma thread separada na thread pool da libuv. Eles são executados sincronamente nas próprias threads, mas, em relação à main thread, parece que eles estão sendo executados de forma assíncrona.

# 5 Asynchronouw Methods Execution

```
    ↑
    │     ┌─────┐
fn 5│     │     │
    │     └─────┘
    ├─────┐
fn 4│     │
    ├─────┘
    ├─────┐
fn 3│     │
    ├─────┘
    ├─────┐
fn 2│     │
    ├─────┘
    ├─────┐
fn 1│     │
    ├─────┘
    └──────────────────────>
          t     2t     3t
```

A thread pool da libuv tem 4 threads por padrão.

# Aumentando a thread pool

É possível aumentar a quantidade de threads presentes na thread pool adicionado uma variável de ambiente, a process.env.UV_THREADPOOL_SIZE, mas isso é limitado pela quantidade de núcleos de CPU do computador.

# Network I/O

Mesmo que a operação https.request seja assíncrona, ela não parece utilizar a thread pool, nem parece ser afetada pelo número de núcleos de CPU, pois ela é uma operação de input/output de rede e não uma operação vinculada à CPU, então ela não utiliza a thread pool. Em vez disso, a libuv delega o trabalho para o kernel do sistema operacional e, sempre que possível, ele vai consultar o kernel para verificar se a requisição foi concluída.

```
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
```

# Code Execution in Node.js

```
┌───────────────────────────────┐         ┌───────────┐
│           v8 engine           │         │   libuv   │
│ ┌─────────────┐ ┌───────────┐ │         │           │
│ │ memory heap │ │ callstack │ │         │           │
│ │             │ │           │ │         │           │
│ │             │ │           │ │         │           │
│ └─────────────┘ └───────────┘ │         │           │
└───────────────────────────────┘         └───────────┘
```

A V8 Engine, que executa o código JavaScript, contém a memory heap e a call stack.

- Sempre que declaramos variáveis e funções, a memória é alocada no heap.
- Sempre que executamos códigos, as funções são levadas ao callstack.

Do outro lado temos a libuv.

- Sempre que executamos um método assíncrono, ele é desembarcado na libuv.
- A libuv vai executar a operação utilizando os mecanismos assíncronos nativos do OS e, se não for possível, vai utilizar a thread pool para executar a operação para assegurar que a main thread não será bloqueada.

# Event Loop

- É um programa em C e que é parte da libuv.
- É um padrão de design que orquestra e coordena a execução de código síncrono e assíncrono no Node.js.
- É um loop que permanece ativo enquanto a aplicação Node.js está sendo executada.
- Ele coordena a execução das callbacks em 6 diferentes queues, que são: nextTick, Promise, timer, I/O, check e close queues.

```
                            ┌──────────────┐
                            │ CB CB CB     │
continue/ ┌────────────────>│ setTimeout/  │───────────────────┐
  exit    │                 │ setInterval  │                   │
          │                 │ callbacks    │                   │
          │                 └──────────────┘                   │
          │                    timer queue                     │
          │                         │                          │
          │                         │                          │
          │                         │                          │
          │                         ↓                          │
          │                  microtask queue                   │
          │              ┌──────────────────────┐              │
          │              │    nextTick queue    │              │
          │              │ ┌──────────────────┐ │          i/o queue
     close queue         │ │   CB CB CB CB    │ │              ↓
 ┌────────┴───────┐      │ │ process.nextTick │ │     ┌────────────────┐
 │ CB             │      │ │     callback     │ │     │ CB CB          │
 │                ├─────>│ ├──────────────────┤ │<────┤                │
 │ close handlers │      │ │   CB CB CB CB    │ │     │ i/o callbacks  │
 └────────────────┘      │ │ promise callback │ │     └────────┬───────┘
          ↑              │ └──────────────────┘ │              │
          │              │     promise queue    │              │
          │              └──────────────────────┘              │
          │                         ↑                          │
          │                         │                          │
          │                         │                          │
          │                         │                          │
          │                    check queue                     │
          │                 ┌───────────────┐                  │
          │                 │ CB CB         │                  │
          └─────────────────┤ setImmediate  │<─────────────────┘ i/o polling
                            │ callbacks     │
                            └───────────────┘
```

As duas queues presentes na microtask queue não fazem parte da libuv, enquanto o restante faz.

# Event Loop - Execution Order

- O código JavaScript síncrono tem prioridade sobre o código assíncrono, então apenas quando a callstack fica vazia, o event loop entre em cena.

1. Quaisquer callbacks nas microtask queues serão executadas. Primeiro, as operações na nextTick queue e depois as da promise queue.
2. Todas as callbacks dentro da timer queue são executadas.
3. Callbacks na microtask queue, se presentes, são executadas (na mesma ordem anterior).
4. Todas as callbacks dentro da I/O queues são executadas.
5. Callbacks na microtask queue, se presentes, são executadas (na mesma ordem anterior).
6. Todas as callbacks na check queue são executadas.
7. Callbacks na microtask queue, se presentes, são executadas (na mesma ordem anterior).
8. Todas as callbacks dentro da close queue são executadas.
9. Pela última vez no mesmo loop, a microtask queue é executada.

- Se houver mais callbacks para serem processadas, o loop permanece ativo para mais uma execução e as mesmas etapas são repetidas.
- Se todas as callbacks forem executadas e não houver mais código para ser processado, o event loop é encerrado.

# Microtask queue

- O código JavaScript síncrono tem prioridade sobre o código assíncrono, então apenas quando a callstack fica vazia, o event loop entre em cena. O console.log 1 entra na callstack, é executado e removido, depois o mesmo acontece

```
console.log("console.log 1");
process.nextTick(() => console.log("this is a process.next 1"));
console.log("console.log 2");

> console.log 1
> console.log 2
> this is a process.next 1
```

- Todas as callbacks no nextTick queue tem prioridade e são executadas antes das callbacks da promise queue.

```
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));

> this is process.nextTick 1
> this is Promise.resolve 1
```

```
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick");
    });
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside Promise then block");
    })
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

> this is process.nextTick 1
> this is process.nextTick 2
> this is process.nextTick 3
> this is the inner next tick inside next tick
> this is Promise.resolve 1
> this is Promise.resolve 2
> this is Promise.resolve 3
> this is the inner next tick inside Promise then block
```

# Timer queue

- As callbacks no microtask queue são executadas antes das callbacks no timer queue.

```
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => console.log("this is setTimeout 2"), 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick");
    });
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside Promise then block");
    });
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

> this is process.nextTick 1
> this is process.nextTick 2
> this is process.nextTick 3
> this is the inner next tick inside next tick
> this is Promise.resolve 1
> this is Promise.resolve 2
> this is Promise.resolve 3
> this is the inner next tick inside Promise then block
> this is setTimeout 1
> this is setTimeout 2
> this is setTimeout 3
```

- As callbacks no microtask queue são executadas entre a execução de callbacks da timer queue.

```
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
    console.log("this is setTimeout 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside setTimeout");
    })
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick");
    });
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside Promise then block");
    });
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

> this is process.nextTick 1
> this is process.nextTick 2
> this is process.nextTick 3
> this is the inner next tick inside next tick
> this is Promise.resolve 1
> this is Promise.resolve 2
> this is Promise.resolve 3
> this is the inner next tick inside Promise then block
> this is setTimeout 1
> this is setTimeout 2
> this is the inner next tick inside setTimeout
> this is setTimeout 3
```

- As callbacks do timer queue são executadas na ordem First In First Out (FIFO).

```
setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 500);
setTimeout(() => console.log("this is setTimeout 3"), 0);

> this is setTimeout 3
> this is setTimeout 2
> this is setTimeout 1
```

# I/O Queue

A maioria dos métodos assíncronos dos módulos nativos enfileiram a função callback no I/O queue.

- As callbacks no microtask queue são executadas antes das callbacks no I/O queue.

```
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

> this is process.nextTick 1
> this is Promise.resolve 1
> this is readFile 1
```

- Ao executar o setTimeout com delay de 0ms e um método I/O assíncrono, a ordem de execução não pode ser garantida. Isso ocorre porque, no código fonte do setTimeout, o intervalo é calculado da seguinte forma:

```
static const double oneMillisecond = 0.001;

double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond);
```

Por conta disso, existe a seguinte possibilidade: a callback ainda não estará enfileirada na timer queue, mas a callback da operação de leitura do arquivo já estará na I/O queue.

```
setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

> this is setTimeout 1
> this is readFile 1
```

- As callbacks do I/O queue são executadas depois das callbacks do microtask queue e do timer queue.

```
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2_000_000_000; i++) {}
```

# I/O Polling

- I/O events são consultados e a respectiva callback é adicionada ao I/O queue apenas depois da operação de I/O estar completa.

```
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
for (let i = 0; i < 2_000_000_000; i++) {}

> this is process.nextTick 1
> this is Promise.resolve 1
> this is setTimeout 1
> this is setImmediate 1
> this is readFile 1
```

# Check Queue

- As callbacks da check queue são executadas depois das callbacks da microtask queue, da timer queue e do I/O queue.

```
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
for (let i = 0; i < 2_000_000_000; i++) {}

> this is process.nextTick 1
> this is Promise.resolve 1
> this is setTimeout 1
> this is readFile 1
```

- As callbacks da microtask queue são executadas depois das callbacks da I/O queue e antes depois das callbacks da check queue.

```
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
  setImmediate(() => console.log("this is inner setImmediate inside readFile"));
  process.nextTick(() =>
    console.log("this is inner process.nextTick inside readFile")
  );
  Promise.resolve().then(() =>
    console.log("this is inner Promise.resolve inside readFile")
  );
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
for (let i = 0; i < 2_000_000_000; i++) {}

> this is process.nextTick 1
> this is Promise.resolve 1
> this is setTimeout 1
> this is readFile 1
> this is inner process.nextTick inside readFile
> this is inner Promise.resolve inside readFile
> this is inner setImmediate inside readFile
```

- As callbacks da microtask queue são executadas entre a execução das callbacks da check queue.

```
setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
    console.log("this is setImmediate 2");
    process.nextTick(() => console.log("this is process.nextTick 1"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));

> this is setImmediate 1
> this is setImmediate 2
> this is process.nextTick 1
> this is Promise.resolve 1
> this is setImmediate 3
```

# Close Queue

- As callbacks da close queue são executas após todas as callbacks de todas as queues após uma iteração do event loop. O ouvinte de evento "close" é como adicionamos uma callback ao close queue.

```
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback");
})
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
```

# npm

- É a maior biblioteca de software do mundo.
- É um software de gerenciamento de pacotes.
- É uma biblioteca ou um registro que contém pacotes de código escritos por vários desenvolvedores.
- É um largo banco de dados de código JavaScript que os desenvolvedores do mundo todo podem compartilhar e emprestar.
- Desenvolvedores podem publicar e consumir pacotes de código.
- Além do npm, existem outros gerenciadores de pacotes, como pnpm e yarn, mas npm é o gerenciador de pacotes padrão.
- Ao construir aplicativos em escala empresarial, muitas vezes precisamos depender do código escrito por outros desenvolvedores, e é aí que precisamos do npm.

# package.json

- É o arquivo de configuração do npm.
- É um arquivo json que geralmente fica na raiz do projeto e armazena os metadados relevantes para o pacote.
- É onde se configura e se descreve como interagir e rodar um pacote.
- Ele é principalmente utilizado pelo npm CLI.

Existem dois campos obrigatórios:

- O "name" define o nome do pacote, precisa ser lower case, conter apenas uma palavra e pode conter hífens ou underscores.
- O "version" define a versão atual do pacote.

```
{
  "name": "greet-anderson",
  "version": "1.0.0"
}
```

# Versioning

- SemVer (Semantic Versioning) é um dos sistemas de versionamento mais amplamente adotados.
- É um conjunto simples de regras e requisitos que ditam como os números de versão são atribuídos e incrementados.

```
              minor version
                    ↑
                    │
major version <── X.Y.Z ──> patch
```

# Versioning bug

- Quando um bug é corrigido e o código permanece compatível com as versões anteriores, o patch é incrementado. Por exemplo: 1.1.1 para 1.1.2.
- Quando uma nova funcionalidade é adicionada, mas o código permanece compatível com as versões anterior, a minor version é incrementada, mas o patch é resetado para 0. Por exemplo: 1.1.1 para 1.2.0.
- Quando ocorre mudanças no códigos, mas o código não permanece compatível com as versões anteriores, a major version é incrementada, mas a minor version e o patch são resetados para 0. Por exemplo: 1.1.1 para 2.0.0.
- O versionamento semântico sempre começa com 0.1.0.
- 0.Y.Z é utilizada para o desenvolvimento inicial.
- Quando o código está pronto para produção, a versão é incrementada para 1.0.0.

# Scripts

- Um npm script é uma forma conveniente de agrupar comandos comuns para uso em um projeto.
- Normalmente, eles são inseridos na linha de comando para fazer algo com a aplicação.
- Os npm scripts são armazenados no arquivo package.json, dando acesso a todos que tiverem acesso ao código-fonte.
- Alguns casos de uso comuns para os npm scripts incluem o build do projeto, inicializar o servidor de desenvolvimento, compilação de CSS, linting, minifying etc.
- Os npm scripts são executados utilizando o comando npm run <SCRIPT_NAME>.

# CLI Tools

- CLI significa Command Line Interface e é um programa que você pode executar no terminal.

Para criar um CLI, basta configurar o package.json com o seguinte campo, sendo que a chave ("anderson-pokedex) será o comando utilizado para executar a CLI e o valor será o ponto de entrada.

```
{
  "bin": {
    "anderson-pokedex": "index.js"
  }
}
```

Adicionar a seguinte linha ao começo do código do CLI:

```
#!/usr/bin/env node
```

E digitar o seguinte comando no terminal para instalá-lo globalmente no computador:

```
npm install -g
```

É possível adicionar valores de entrada no CLI utilizando o módulo yargs junto com o comando process.argv:

```
const yargs = require("yargs");
const { argv } = yargs(process.argv);
```

# Cluster

- O Node.js é single-threaded, então, não importa quantos núcleos o computador tenha, o Node.js usará apenas um núcleo da CPU.
- O módulo Cluster permite a criação de child processes (também chamados de Workers) que são executados simultaneamente.
- Todos os workers compartilham a mesma porta.

# Sem Cluster

No exemplo abaixo, uma API foi criada. Na rota raiz, temos uma simples resposta com plain text. No entanto, na rota slow-page, temos um for loop que simula um trabalho de longa duração da CPU. Caso a rota slow-page seja carregada e, logo em seguida, a rota raiz também, a rota raiz e a slow-page demorarão o mesmo tempo para carregar. Isso ocorre porque o Node.js é single-threaded, então enquanto a rota slow-page carrega, o carregamento da rota raiz é bloqueado.

```
const http = require("node:http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    } else if (req.url === "/slow-page") {
        for(let i = 0; i < 6_000_000_000; i++) {}
        res.writeHead(200, { "Cotent-Type": "text/plain" });
        res.end("Slow Page");
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
```

```
         index.js
    ┌────────────────┐
    │ cluster master │
    └────────────────┘
            /\
           /  \
          /    \
         v      v
┌──────────┐  ┌──────────┐
│ worker 1 │  │ worker 2 │
└──────────┘  └──────────┘
```

- A master está no comando dos workers, mas não executa a aplicação.
- Os workers estão no comando para lidar com requisições, ler arquivos, etc.
- Cada worker tem o seu próprio Event Loop, memória e instância do V8.
- Se você criar mais workers do que há de núcleos lógicos no computador, isso pode causar sobrecarga, pois o sistema terá que agendar todos os workers criados com um número menor de núcleos.
- Com o pm2 é possível executar o servidor como cluster e ele decidirá o melhor número de worker para criar para o computador.

```
npm install pm2 -g
pm2 start no-cluster.js -i 0
```

# Worker Thread

- O módulo worker_threads permite usar threads para executar JavaScript em paralelo.
- O código executado em uma worker thread é executado em um child process separado, prevenindo de bloquear a aplicação principal.
- O módulo cluster permite executar múltiplas instâncias do Node.js que podem distrubuir cargas de trabalho.
- O módulo worker_threads permite executar múltiplas threads dentro de uma única instância do Node.js.

```
const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    } else if (req.url === "/slow-page") {
        const worker = new Worker("./worker-thread.js");
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Slow Page ${j}`);
        });
    }
});

server.listen(8000, () => console.log("Server is running on port 8000."));
```

```
const { parentPort } = require("node:worker_threads");

let j = 0;
for(let i = 0; i < 6_000_000_000; i++) {
    j++;
}

parentPort.postMessage(j);
```