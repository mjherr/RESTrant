require('dotenv').config()
const express = require('express')
const app = express()

//router
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use('/places', require('./controllers/places'))

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//wildcard route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)