class NewsController {
    //[GET] news
    index(req, res) {
        res.render('news');
    }

    //[GET] new:slug
    details(req, res) {
        res.send('chi tiết tin tức');
    }
}

module.exports = new NewsController();
