// Função em JavaScript é First-Class Object (Citizens)
// Higher-order function

/*
Isso significa que você pode tratar uma função como um dado,
ou seja, você pode passar uma função como parâmetro de outra função,
pode retornar uma função, uma função pode guardar uma variável...
*/

// Criar uma função de forma literal
function fun1(){

}

// Armazenar uma função em uma variável
const fun2 = function () {

}

//Armazenar uma função em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3)) //executando a função no index 0

// Armazenando em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)