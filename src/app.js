const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const port = 3000;

const app = express();

//http logger
// app.use(morgan('combined'));

//template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources', 'views'));

//static file
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res) => {
    res.render('home');
})
app.get('/search',(req, res) => {
    console.log(req.query.age);
    res.render('search');
})

app.get('/news', (req,res) => {
    res.render('news');
    console.log(req.query.q);
})
app.listen(port,() => console.log(`Server is running localhost:${port}`));