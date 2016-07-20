/**
 * Created by ravi.hamsa on 7/16/16.
 */
var express = require('express');
var app = express();


var proxy = require('express-http-proxy');


//app.use(express.static('src'));

app.use(express.static('public'));


app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
