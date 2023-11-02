var express = require('express');
var router = express.Router();
var jsend = require('jsend');
router.use(jsend.middleware);
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() 

router.get('/', async function(req, res, next) {
  res.jsend('this is the json endpoint');
});

router.post('/', jsonParser, async function(req, res, next) {
  /*let input = req.body; 
  console.log(input);
  res.send(input);*/
  
  await s3.putObject({
    Body: JSON.stringify(req.body),
    Bucket: "cyclic-cute-jade-veil-eu-north-1",
    Key: "input.js",
  }).promise()

  res.send('ok').end()
})

module.exports = router;