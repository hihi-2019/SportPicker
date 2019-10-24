const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const basketball = sportData.basketball

router.get('/basketball', (req, res) =>{
    
    res.send("hello")
})

router.get('/basketball/:id', (req, res) =>{
    
    let basketballTeam= sportData.basketball.find(function(element){
            return element.id == req.params.id
        })

        res.render("partials/basketball", basketballTeam)
})


module.exports = router