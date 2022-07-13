const x = "10"

//TESTAR SE É UM INTEIRO

if(!Number.isInteger(x)){
    throw new Error("The value is not integer!")
}

console.log("Continue...")