const express = require('express')
const hbs = require('express-handlebars')
// const rugby = require('./routes/rugby')
// const football = require('./routes/football')
// const basketball = require('./routes/basketball')
// const icehockey = require('./routes/icehockey')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
// server.use('/sports', rugby)
// server.use('/sports', football)
// server.use('/sports', basketball)
// server.use('/sports', icehockey)


server.get('/sports', (req, res) => {
  
  res.render('home')
})






module.exports = server