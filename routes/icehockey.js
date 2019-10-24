const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const icehockey = sportData.icehockey


router.get('/icehockey', (req, res) =>{
    
    res.send("hello")
})

router.get('/icehockey/:id', (req, res) =>{
    
    let iceHockeyTeam = sportData.icehockey.find(function(element){
            return element.id == req.params.id
        })

        res.render("partials/iceHockey", iceHockeyTeam)
})


module.exports = router