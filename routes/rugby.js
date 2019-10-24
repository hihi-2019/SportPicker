const express = require('express')
const router = express.Router()
const sportData = require('../sportData')
const rugby = sportData.rugby


// console.log(rugby)

router.get('/rugby', (req, res) =>{
    const team = {
        team: rugby
    }
    res.render("./partials/team", team) 
})

router.get('/rugby/:id', (req, res) =>{
    
    // const rugbyInfo = {
    //     Team: sportData.rugby.find(function(element){
    //         return element.id == req.params.id
    //     }),
    //     sport: rugby
    // }
        // res.render("partials/team", rugbyInfo)
})



module.exports = router