const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumeroPrimo(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


rl.question('Digite um número para validar se é primo: ', (resposta) => {
    const numeroDigitado = parseInt(resposta);

    
    const resultado = verificarNumeroPrimo(numeroDigitado);
    console.log(`O número digitado ${numeroDigitado} ${resultado ? "é um número primo! " : "não é um número primo. "}`);
    

    
    console.log("\nCasos de Teste:\n");
    console.log("0:", verificarNumeroPrimo(0));
    console.log("1:", verificarNumeroPrimo(1));
    console.log("2:", verificarNumeroPrimo(2));
    console.log("3:", verificarNumeroPrimo(3));
    console.log("7:", verificarNumeroPrimo(7));
    console.log("83:", verificarNumeroPrimo(83));
    console.log("100:", verificarNumeroPrimo(100));
    console.log("991:", verificarNumeroPrimo(991));
    console.log("104729:", verificarNumeroPrimo(104729));
    console.log("14348907:", verificarNumeroPrimo(14348907));

    
    rl.close();
});