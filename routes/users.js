var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "Anna", password: "minkattHugo"},
  {id: 1, name: "Bengt", password: "Seglaelivet"},
  {id: 1, name: "Cissi", password: "Godchoklad"},
  {id: 1, name: "Daniel", password: "MFFrockar"},
  {id: 1, name: "Eric", password: "Jagvillhahelg"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

module.exports = router;
