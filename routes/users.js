var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");

let users = [
  {id: 86574, name: "Anna", password: "minkattHugo"},
  {id: 74589, name: "Bengt", password: "Seglaelivet"},
  {id: 25896, name: "Cissi", password: "Godchoklad"},
  {id: 15874, name: "Daniel", password: "MFFrockar"},
  {id: 74845, name: "Eric", password: "Jagvillhahelg"}
]

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  var userPass = "MittFantastiskaLösenord";
  console.log(userPass);

  var krypteratPass = CryptoJS.AES.encrypt(userPass, "Salt Nyckel").toString();
  console.log(krypteratPass);

  var originalPass = CryptoJS.AES.decrypt(krypteratPass, "Salt Nyckel").toString(CryptoJS.enc.Utf8);
  console.log(originalPass);

});*/

router.get('/', function(req, res, next) {

  res.json(users);
});


/*--------------- Kod för att hantera inloggning -----------------------------------------------*/

router.post('/login', function(req, res, next) {

  let loginData = req.body;

  for (let i = 0; i < users.length; i++) {
    if (req.body.name == users[i].name) {
      var originalPass = CryptoJS.AES.decrypt(users[i].password, "Salt Nyckel").toString(CryptoJS.enc.Utf8);

      console.log(users[i].password);
      if (loginData.password == originalPass){

        res.json({id: users[i].id});
      //  console.log(users[i].id);
        return
      }
    }
  }

  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end("Your user is not found!");

  //console.log(loginData);

});


/*--------------------------------Kod för att hantera tillägg av ny användare-------------------------------*/

router.post('/', function(req, res, next) {

  var krypteratPassNew = CryptoJS.AES.encrypt(req.body.password, "Salt Nyckel").toString();
  console.log(krypteratPassNew);

  let newUser = req.body;
  newUser.password = krypteratPassNew;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

module.exports = router;
