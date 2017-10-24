const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/1', function (req, res) {
    res.render('1');
});

app.get('/2', function (req, res) {
    res.render('2');
});

app.get('/3', function (req, res) {
    res.render('3');
});


app.use(express.static('public/'));

app.listen(3100, function () {
    console.log('Webserver listening on port 3100');
});
