var express = require("express");
var http = require("http");
var path = require("path");

var models = require("./models");
var Category = models.Category;
var User = models.User;
var Reply = models.Reply;
var Event = models.Event;
var Review = models.Review;

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

app.get("/category", function (request, response, next) {
    Category.find(function (error, items) {
        if (error) { return next(error); }
        response.send(items);
    });
});
app.post("/category", function (request, response, next) {
    // 요청 매개 변수를 추출합니다.
    var name = request.param("name");
    // 데이터베이스 요청을 수행합니다.
    Category.create({
        name: name
    }, function (error, category) {
        if (error) { return next(error); }
        response.send(category);
    });
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
