
let p = new Promise(resolve=>resolve(['Ana','Bia','Carlos','Daniel']))

const primeiroElemento = array => array[0]
const letraMinuscula = letra => letra.toLowerCase()


p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)