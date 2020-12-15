const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de pláastico', preco: 18.99, fragil: true}
]

// Resolição Abraão
console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil

}))


// Resolução Leo
const caro = produto => produto.preco >= 500
const frafil = produto => produto.fragil

console.log(produtos.filter(caro).filter(frafil))