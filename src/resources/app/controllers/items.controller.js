const { mongooseArrayToObject } = require('../../../util/mongoose');
const Items = require('../models/items.model');

class ItemsController {
    //[GET] /items
    index(req, res, next) {
        Items.find({})
            .then((items) => {
                res.render('items', {
                    items: mongooseArrayToObject(items),
                });
            })
            .catch((error) => next(error));
    }
}

module.exports = new ItemsController();
