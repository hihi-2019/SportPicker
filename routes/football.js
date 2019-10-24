const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const football = sportData.football

router.get('/football', (req, res) =>{
    
    res.send("hello")
})
// console.log(sportData.football)

router.get('/football/:id', (req, res) =>{
    
    let footBallTeam= sportData.football.find(function(element){
            return element.id == req.params.id
      
        })
        console.log(footBallTeam)

        // res.render("partials/football", footBallTeam)
})



module.exports = router