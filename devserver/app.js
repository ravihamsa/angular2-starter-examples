var express = require('express');
var app = express();

/*app.get('/', function (req, res) {
 res.send('Hello World!');
 });*/

var projects = [{id:'one', name:'one', status:'todo'},{id:'two', name:'two', status:'todo'}];
var challenges = [{id:'one', name:'one', status:'active'},{id:'two', name:'two', status:'active'}];


app.get('projects.json', function(req, res){
  res.send(projects)
})

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.get('/projects.json', function(req, res){
  res.send(JSON.stringify(projects))
})

app.get('/challenges.json', function(req, res){
  res.send(JSON.stringify(challenges))
})

app.get('*', function(req, res){
  res.send('what???', 404);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
