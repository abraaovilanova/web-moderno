/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function classificacaoTriangulo(a, b, c){

    if (b + c > a && a + c > b && a + b > c){
        if(a === b && a === c){
            console.log('O triangulo é EQUILÁTERO')
        }else if(a !== b && b === c || a === b && b !== c || a === c && b !== c){
            console.log('O triangulo é ISÓSCELES')
        }else{
            console.log('O triangulo é ESCALENO')
        }
    }else{
        console.log('Não é triangulo')
    }
}

classificacaoTriangulo(4,4,5)