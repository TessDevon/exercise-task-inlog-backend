var express = require('express');
var router = express.Router();

let users = [
  {id: 86574, name: "Anna", password: "minkattHugo"},
  {id: 74589, name: "Bengt", password: "Seglaelivet"},
  {id: 25896, name: "Cissi", password: "Godchoklad"},
  {id: 15874, name: "Daniel", password: "MFFrockar"},
  {id: 74845, name: "Eric", password: "Jagvillhahelg"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {

  let loginData = req.body;

  for (let i = 0; i < users.length; i++) {
    if (req.body.name == users[i].name) {
      if (req.body.password == users[i].password){
        //let okId = users[i].id

        //res.writeHead(200, {"Content-Type": "text/plain"});
        res.json({id: users[i].id});
        console.log(users[i].id);
        return
      }
    }
  }

  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end("Your user is not found!");

  //console.log(loginData);

//  res.json(users);
});

/*
router.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});*/

module.exports = router;
