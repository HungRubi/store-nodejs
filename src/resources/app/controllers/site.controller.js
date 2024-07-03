const Items = require('../models/items.model');
const { mongooseArrayToObject } = require('../../../util/mongoose');
class SiteController {
    //[GET] home modul
    index(req, res, next) {
        Items.find({})
            .then((items) => {
                items = mongooseArrayToObject(items);
                res.render('home', { items: items });
            })
            .catch((error) => next(error));
    }

    //[GET] serach modul
    search(req, res) {
        res.render('search');
    }

    //[GET] detail item
    deltailItems(req, res, next) {
        Items.findOne({ slug: req.params.slug })
            .then((items) => {
                res.json(items);
            })
            .catch((error) => next(error));
    }
    create(req, res, next) {}
}
module.exports = new SiteController();
