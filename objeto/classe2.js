class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }

}


class Pai extends Avo { //Essa é a forma que no âmbito de sintaxi de classe que determinada classe tem um prototype
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Vila Nova')
    }
}

const filho = new Filho
console.log(filho)