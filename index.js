const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    let pound = Number(req.body.pounds);
    let poundToKg = (pound / 2.205).toFixed(2);

    res.send(`<h1 style='font-size: 10rem; text-align: center'>${poundToKg}kg</h1>`);

});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});