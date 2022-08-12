require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./models/places.js')

//routes
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//GET /places
app.get('/', (req, res) => {
    res.render('place/index')
})

//wildcard route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)