const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const football = sportData.football

router.get('/football', (req, res) =>{
    const team = {
        team: football
    }
    res.render("partials/team", team) 
    
})


router.get('/football/:id', (req, res) =>{
    
    const footballInfo = {
        Team: sportData.football.find(function(element){
            return element.id == req.params.id
        }),
        sport: football
    }

        // res.render("partials/football", Team)
})



module.exports = router