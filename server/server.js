var express = require('express');
var app = express()
var pg = require('pg')
var bodyParser = require('body-parser')
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}))
app.use((express.static('server/public')))

app.get('/shoes', function(req, res){
    res.send(shoes);
})

app.listen(port, function(){
    console.log('listening on port', port);
});

var shoes = [{name:'nike', cost: '75'}]