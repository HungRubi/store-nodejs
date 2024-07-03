const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const route = require('./resources/routes/index.route');
const port = 3000;

const db = require('./config/db/index');

//connect to DB
db.connect();

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

// app.use(express.json());

// http logger
app.use(morgan('combined'));

//template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//static file
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(port, () => console.log(`App is running localhost:${port}`));
