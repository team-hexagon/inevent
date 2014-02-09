(function () {
    var ObjectId, Schema, User, UserSchema, mongoose;

    mongoose = require("mongoose");

    Schema = mongoose.Schema;

    ObjectId = Schema.Types.ObjectId;

    UserSchema = new Schema({
        "login": {
            "type": String,
            "lowercase": true,
            "required": true
        },
        "password": {
            "type": String,
            "required": true
        },
        "username": {
            "type": String,
            "required": true
        },
        "create_at": {
            "type": Number,
            "default": Date.now
        },
        "thumbnail": {
            "type": String
        },
        "latitude": {
            "type": Number
        },
        "longitude": {
            "type": Number
        },
        "description": {
            "type": String,
            "default": "잘 부탁드립니다."
        },
        "_enroll_events": {
            "type": [{
                "type": ObjectId,
                "ref": "Event"
            }]
        },
        "_create_events": {
            "type": [{
                "type": ObjectId,
                "ref": "Event"
            }]
        },
        "_reviews": {
            "type": [{
                "type": ObjectId,
                "ref": "Review"
            }]
        },
        "_replies": {
            "type": [{
                "type": ObjectId,
                "ref": "Reply"
            }]
        }
    });

    User = mongoose.model("User", UserSchema);

    module.exports = User;

}).call(this);
