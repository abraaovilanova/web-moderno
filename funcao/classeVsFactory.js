// Classe
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// ?
function Pessoas(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoas('Abraão')
p3.falar()

//Função Factory
const criarPessoa = nome => {
    return {
        nome,
        falar: ()=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Carminha')
p2.falar()


