(function () {
    var log, mongoose;

    mongoose = require("mongoose");

    log = console.log;

    mongoose.connect("mongodb://127.0.0.1/inevent", function (error) {
        if (error) {
            console.error("connect error to mongodb://127.0.0.1/inevent");
            return process.exit(1);
        }
    });

    exports.Category = require("./category");

    exports.Reply = require("./reply");

    exports.Review = require("./review");

    exports.User = require("./user");

    exports.Event = require("./event");

}).call(this);
