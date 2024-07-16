const redis = require("redis");
const jwt = require("jsonwebtoken");

var rediscl = redis.createClient();

rediscl.on("connect", function () {
    console.log("Redis plugged in.");
});
