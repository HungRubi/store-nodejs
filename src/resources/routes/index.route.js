const siteRouter = require('../routes/site.route');
const itemsRouter = require('../routes/items.route');
function route(app) {
    app.use('/items', itemsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
