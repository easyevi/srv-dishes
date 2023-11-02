/*const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const save = async (input) => {
    console.log("saving");
    await s3.putObject({
        Body: JSON.stringify(input),
        Bucket: "cyclic-cute-jade-veil-eu-north-1",
        Key: "input.js",
    }).promiise()
};

module.exports = { save };*/