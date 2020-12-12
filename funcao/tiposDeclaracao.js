console.log(soma(1,2)) //Isso é possível!

// function declaration
function soma(x ,y){
    return x + y
}

console.log(soma(3, 4)) 

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3,4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))