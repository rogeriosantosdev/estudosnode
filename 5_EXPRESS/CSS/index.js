const express = require('express')

const app = express()
const port = 3000
const path = require('path')

const userRoute = require('./users')

// Reading body

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


//Arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', userRoute)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})