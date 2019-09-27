const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/home', { user: req.user, page: "home"});
});

module.exports = router;
