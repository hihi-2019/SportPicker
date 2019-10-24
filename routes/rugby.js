const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const rugby = sportData.rugby


// console.log(rugby)

router.get('/rugby', (req, res) =>{
    
    // res.render("/partials/rugby", rugby) something like this 
})

router.get('/rugby/:id', (req, res) =>{
    
    let rugbyTeam= sportData.rugby.find(function(element){
            return element.id == req.params.id
        })
        console.log(rugbyTeam)
        // res.render("partials/rugby", rugbyTeam)
})


module.exports = router