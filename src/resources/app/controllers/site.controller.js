class SiteController {
    //[GET] /
    show(req, res, next) {
        res.render('home');
    }
}

module.exports = new SiteController();
