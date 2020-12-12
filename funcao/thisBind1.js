const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigma: Funcional e POO

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

