var express = require('express');
var router = express.Router();
var jsend = require('jsend');
router.use(jsend.middleware);


router.get('/', async function(req, res, next) {
  res.jsend('this is the json endpoint');
});

router.post('/', async function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;