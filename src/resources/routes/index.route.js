const newsRouter = require('../routes/news.route');

function route(app) {
    app.use('/news', newsRouter);
    
}

module.exports = route;