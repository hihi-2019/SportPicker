const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const icehockey = sportData.icehockey


router.get('/icehockey', (req, res) =>{
    
    res.send("hello")
})


module.exports = router