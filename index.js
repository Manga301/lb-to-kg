const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let poundToKg;

app.get('/', function(req, res){
   
    res.render('index', {weightInKg: poundToKg});

    
});

app.post('/', function(req, res){
    let pound = Number(req.body.pounds);
    poundToKg = `${pound}lb = ${(pound / 2.205).toFixed(2)}kg`;

    // res.send(`<h1 style='font-size: 10rem; text-align: center'>${poundToKg}kg</h1>`);
    res.redirect('/');

});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});