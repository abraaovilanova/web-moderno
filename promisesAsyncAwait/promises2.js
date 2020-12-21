// Callback Hell
/*
setTimeout(()=>{
    console.log('Executando a PRIMEIRA callback...')

    setTimeout(()=>{
        console.log('Executando a SEGUNDA callback...')

        setTimeout(()=>{
            console.log('Executando a TERCEIRA callback...')
        },1000)
    },2000)
},2000)
*/

function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        
        setTimeout(() =>{
            console.log('Executando . . .')
            resolve()

        },3000)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)