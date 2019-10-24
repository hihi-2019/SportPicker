const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const football = sportData.football

router.get('/football', (req, res) =>{
    
    res.send("hello")
})


module.exports = router