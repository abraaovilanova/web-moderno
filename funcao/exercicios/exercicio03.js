/* 
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

// Solução Abraão
function expoente(base, expoente){
    return base**expoente
}

console.log(expoente(2,3))

// Solução Leo
function expoente2 (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente2(2, 3))