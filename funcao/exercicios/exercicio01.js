/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

// Resolução Abraão
function minhaFuncao(valor1, valor2){
    console.log(
        `
        ${valor1} + ${valor2} = ${valor1+valor2}
        ${valor1} - ${valor2} = ${valor1-valor2}
        ${valor1} / ${valor2} = ${valor1/valor2} 
        ${valor1} x ${valor2} = ${valor1*valor2}
        `
    )

}


minhaFuncao(1,2)

// Resolução Leo
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

