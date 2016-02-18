var pg = require('pg');
var conString = `postgres://pppetrov:${process.env.PG_PASSWORD}@localhost/animals`;


function getAnimals (req, res, next) {
    pg.connect(conString, function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM animals', function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }
            console.log(result);
            req.rows = result.rows;
            console.log(result.rows);
            next();
        });
    });
};

module.exports.getAnimals = getAnimals;

