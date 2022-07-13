const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if(language==='JavaScript'){
        console.log(`A minha linguagem preferida é: ${language}`)
        console.log('Nós da RSTecnology ficamos felizes pela sua boa escolha em linguagem')
    } else {
        console.log('Esperamos que da próxima você faça uma boa escolha em linguagem!')
    }
    readline.close()
})

