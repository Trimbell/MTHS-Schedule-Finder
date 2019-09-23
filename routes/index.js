const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/index', { user: req.user});
});

module.exports = router;
