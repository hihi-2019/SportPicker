const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const icehockey = sportData.icehockey


router.get('/icehockey', (req, res) =>{
    const team = {
        team: icehockey
    }
    res.render("./partials/team", team) 
    
})

router.get('/icehockey/:id', (req, res) =>{
    
    const icehockeyInfo = {
        Team: sportDicehockeyball.find(function(element){
            return element.id == req.params.id
        }),
        sport: icehockey
    }

        res.render("partials/iceHockey", Team)
})


module.exports = router