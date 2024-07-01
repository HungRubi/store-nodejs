class SiteController{

    //[GET] home modul
    index(req, res) {
        res.render('home');
    }
    
    //[GET] serach modul
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController;