const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('home')
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2',
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('Conectou ao mysql!')

    app.listen(3000)
})