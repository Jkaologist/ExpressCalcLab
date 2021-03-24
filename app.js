/** Simple demo Express app. */
const stats = require("./stats");
const utils = require("./utils");
const express = require("express");
const app = express();
// useful error class to throw
const { NotFoundError } = require("./expressError");

const MISSING = "Expected key `nums` with comma-separated list of numbers.";

/** Finds mean of nums in qs: returns {operation: "mean", result } */

// example nums: 1,2,5,6
app.get("/mean", function (req, res) {
  let stringsArr = req.query.nums.split(",")
  let numbersArr = utils.convertStrNums(stringsArr)
  return res.json({ mean : stats.findMean(numbersArr) });
})

/** Finds median of nums in qs: returns {operation: "median", result } */

app.get("/median", function (req, res) {
  let stringsArr = req.query.nums.split(",")
  let numbersArr = utils.convertStrNums(stringsArr)
  return res.json({ median : stats.findMedian(numbersArr) });
})
/** Finds mode of nums in qs: returns {operation: "mean", result } */

app.get("/mode", function (req, res) {
  let stringsArr = req.query.nums.split(",")
  let numbersArr = utils.convertStrNums(stringsArr)
  return res.json({ mode : stats.findMode(numbersArr) });
})
/** 404 handler: matches unmatched routes; raises NotFoundError. */
// app.use(function (req, res, next) {
//   return next(new NotFoundError());
// });

/** Error handler: logs stacktrace and returns JSON error message. */
// app.use(function (err, req, res, next) {
//   const status = err.status || 500;
//   const message = err.message;
//   if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
//   return res.status(status).json({ error: { message, status } });
// });



module.exports = app;