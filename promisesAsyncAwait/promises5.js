function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um Erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.8)
    .then(v => console.log(`Valor: ${valor}`))
    .catch(err => console.log(`Erro: ${err}`))
