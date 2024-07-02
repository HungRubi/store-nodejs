const Items = require('../models/items.model');

class SiteController {
    //[GET] home modul
    index(req, res) {
        Items.find({})
            .then((items) => res.json(items))
            .catch((err) => res.status(400).json({ error: 'Message' }));
        // res.render('home');
    }

    //[GET] serach modul
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
