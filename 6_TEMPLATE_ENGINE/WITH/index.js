const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) => {
    const items = ["item a", "item b", "item c", "item d"]

    res.render('dashboards', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender node.js',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/', (req, res) => {
    const user = {
        name: "Rogério",
        surname: "Santos"
    }

    const auth = true

    const approved = true

    res.render('home', { user: user, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando na porta 3000')
})