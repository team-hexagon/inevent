
/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");

var models = require("./models");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("your secret here"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
    app.use(express.errorHandler());
}




var Category = models.Category;
app.get("/category", function (request, response, next) {
    Category.find(function (error, items) {
        response.send(items);
    });
});
app.post("/category", function (request, response, next) {

});







app.get("/", function (request, response, next) { });
app.post("/", function (request, response, next) { });
app.get("/", function (request, response, next) { });
app.post("/", function (request, response, next) { });
app.get("/", function (request, response, next) { });
app.post("/", function (request, response, next) { });
app.get("/", function (request, response, next) { });
app.post("/", function (request, response, next) { });

http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
});
