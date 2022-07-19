const fs = require('fs')
const arquivoAntigo = 'arquivo.txt'
const arquivoNovo = 'novoarquivo.txt'


fs.rename(arquivoAntigo, arquivoNovo, function(err){
    if(err){
        console.log(err)
        return
    }

    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`)
})