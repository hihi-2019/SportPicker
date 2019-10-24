const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const basketball = sportData.basketball

router.get('/basketball', (req, res) =>{
    
    res.send("hello")
})


module.exports = router