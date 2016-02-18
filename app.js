var express = require('express');
var pg = require('./db/pg');


var app = express();

app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('listenin');
});


app.get('/', pg.getAnimals, function(req, res) {
//    var modified = res.rows.map(function(row) {
    //        return row.name.toUpperCase();
    //    });
    console.log(res.rows);
    res.render('index.html.ejs', res.rows[0]);
});
