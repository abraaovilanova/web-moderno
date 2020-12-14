/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

// Solução Abraão
function divisao(dividendo, divisor){
    console.log(`Resultado: ${dividendo / divisor} | resto: ${dividendo % divisor}`)
    
}

divisao(11,4)

// Solução Leo
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)