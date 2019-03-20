var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("../models");

// Initialize Express
//var app = express();
var express = require("express");
var app = express();

// Grab the headlines as a json
module.exports = function (app) {
  // A GET route for scraping the star tribune website
  app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with request
    axios.get("http://www.https://www.mlb.com/").then(function (response) {

      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
$("li.p-mixed-feed__item p-mixed-feed__item--featured-content").each(function (i, element) {
    var result = {};
     result.title = $(this).find("li.data-title").text().trim();
        result.link = $(this).find("a.p-featured-content__body").attr("href");
        result.summary = $(this).find("div.p-featured-content__body").text().trim();
        result.video = $(this).find("a.tease-headline").find("div.tease-photo-img").find("img").attr("src");

        console.log(result);

     //    result.title = $(this).find("a.tease-headline").text().trim();
      //  result.link = $(this).find("a.tease-headline").attr("href");
    //    result.summary = $(this).find("div.tease-summary").text().trim();
     //   result.image = $(this).find("a.tease-headline").find("div.tease-photo-img").find("img").attr("src");
