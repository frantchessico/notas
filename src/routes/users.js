const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/singnin')
})

router.get('/users/signup', (req, res) => {
    res.render('users/signup')
});

router.post('/users/signup', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

module.exports = router;

