(function () {
    var ObjectId, Review, ReviewSchema, Schema, mongoose;

    mongoose = require("mongoose");

    Schema = mongoose.Schema;

    ObjectId = Schema.Types.ObjectId;

    ReviewSchema = new Schema({
        "title": {
            "type": String,
            "required": true
        },
        "description": {
            "type": String,
            "requried": true
        },
        "_author": {
            "type": ObjectId,
            "ref": "User",
            "required": true
        },
        "create_at": {
            "type": Number,
            "default": Date.now
        },
        "_event": {
            "type": ObjectId,
            "ref": "Event",
            "required": true
        }
    });

    Review = mongoose.model("Review", ReviewSchema);

    module.exports = Review;

}).call(this);
