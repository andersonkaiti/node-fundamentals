function greet(name) {
    console.log(`Hello, ${name}`);
}

/**
 * greetVishwas é uma HOT (High Order Function), ou seja, ela aceita uma função como argumento
 * greetFn é uma callback, ou seja, ela pode ser passada como argumento de outra função
 */
function highOrderFunction(callback) {
    const name = "Vishwas";
    callback(name);
}

highOrderFunction(greet);

function callback() {
    document.getElementById("demo").innerHTML = "Hello, World";
}

// a função callback apenas é executada quando o usuário clica no botão,
// ou seja, a callback é assíncrona
document.getElementById("btn").addEventListener("click", callback);