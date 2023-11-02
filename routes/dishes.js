var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {
  res.send('this is the dishes endpoint');
});

router.get('/:key', async function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;