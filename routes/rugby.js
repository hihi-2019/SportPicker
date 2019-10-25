const express = require("express");
const router = express.Router();
const sportData = require("../sportData");
const rugby = sportData.rugby;

// console.log(rugby)

router.get("/rugby", (req, res) => {
  const team = {
    team: rugby,
    sport: "rugby"
  };
  res.render("./partials/team", team);
});

router.get("/rugby/:id", (req, res) => {
  const id = req.params.id;
  const rugbyInfo = {
    Team: sportData.rugby.find(function(element) {
      return element.id == req.params.id;
    })
  };

  res.render("partials/bio", rugbyInfo.Team);
});

module.exports = router;
