const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const rugby = sportData.rugby


console.log(rugby)

router.get('/rugby', (req, res) =>{
    
    // res.render("/partials/rugby", rugby) something like this 
})


module.exports = router