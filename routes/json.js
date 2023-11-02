var express = require('express');
var router = express.Router();
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() 

router.get('/', jsonParser, async function(req, res, next) {
  let s3File = await s3.getObject({
    Bucket: "cyclic-cute-jade-veil-eu-north-1",
    Key: "input.json",
    }).promise()

    let result = (s3File.Body.toString('utf-8'));
    console.log(result);
    res.send(result);
});

router.post('/', jsonParser, async function(req, res, next) {
  let input = req.body; 
  console.log(input);
  
  await s3.putObject({
    Body: JSON.stringify(req.body),
    Bucket: "cyclic-cute-jade-veil-eu-north-1",
    Key: "input.json",
  }).promise()

  res.send(input)
})

module.exports = router;