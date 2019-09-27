const router = require('express').Router();
const passport = require('passport');

// auth with google
router.get('/login', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/login/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/account/');
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
