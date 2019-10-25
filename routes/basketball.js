const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const basketball = sportData.basketball

router.get('/basketball', (req, res) =>{
    const team = {
        team: "basketball"
    }
    res.render("./partials/team", team) 
   
})

router.get('/basketball/:id', (req, res) =>{
    
    const basketballInfo = {
        Team: sportData.basketball.find(function(element){
            return element.id == req.params.id
        }),
        sport: basketball
    }
     res.render("partials/basketball", Team)
})


module.exports = router