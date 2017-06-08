var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));// aller chercher la template

var clientList = [
  {firstName: "John", lastName : "Doe", email: "john@gmail.com", phone: "0612457845"},
  {firstName: "Don", lastName : "Draper", email: "don@gmail.com", phone: "0654453587"},
  {firstName: "Jon", lastName : "Snow", email: "snow@gmail.com", phone: "0854357845"} 
];

app.get('/', function (req, res) { 
  res.render("index", {clients : clientList});
});

app.get('/delete', function (req, res) { 
  console.log(req.query.i);
  clientList.splice(req.query.i, 1);
  res.render("index", {clients : clientList});
});

app.get('/add', function (req, res) { 
  clientList.push(req.query);
  res.render("index", {clients : clientList});
});

app.get('/update', function (req, res) { 
// remplacer tout le code en bas par :
    clientList[req.query.i]=req.query
  //clientList[req.query.i][req.query.property] = req.query.value;
  
  /*if(req.query.property == "firstName") {
    clientList[req.query.i].firstName = req.query.value;
  }
  if(req.query.property == "lastName") {
    clientList[req.query.i].lastName = req.query.value;
  }
  if(req.query.property == "email") {
    clientList[req.query.i].email = req.query.value;
  }   
  if(req.query.property == "phone") {
    clientList[req.query.i].phone = req.query.value;
  } */   
  res.render("index", {clients : clientList});// index c'est le code html dans le dossier template
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});