var express = require('express');
var router = express.Router();
var jsend = require('jsend');
router.use(jsend.middleware);
const AWS = require("aws-sdk");
const s3 = new AWS.S3()


router.get('/', async function(req, res, next) {
  res.jsend('this is the json endpoint');
});

router.post('/', async function(req, res, next) {
  let input = req.body; 
  console.log(input);
});

module.exports = router;