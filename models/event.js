(function () {
    var Event, EventSchema, ObjectId, Schema, mongoose;

    mongoose = require("mongoose");

    Schema = mongoose.Schema;

    ObjectId = Schema.Types.ObjectId;

    EventSchema = new Schema({
        "title": {
            "type": String,
            "required": true
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
        "event_start_at": {
            "type": Number,
            "required": true
        },
        "event_end_at": {
            "type": Number,
            "required": true
        },
        "enroll_start_at": {
            "type": Number,
            "required": true
        },
        "enroll_end_at": {
            "type": Number,
            "required": true
        },
        "description": {
            "type": String,
            "required": true
        },
        "thumbnail": {
            "type": String
        },
        "latitude": {
            "type": Number,
            "required": true
        },
        "longitude": {
            "type": Number,
            "required": true
        },
        "address": {
            "type": String,
            "required": true
        },
        "participators_limit": {
            "type": Number,
            "required": true
        },
        "_participators": {
            "type": [{
                "type": ObjectId,
                "ref": "User"
            }]
        },
        "price": {
            "type": Number,
            "required": true
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
        },
        "_category": {
            "type": ObjectId,
            "ref": "Category",
            "required": true
        }
    });

    Event = mongoose.model("Event", EventSchema);

    module.exports = Event;

}).call(this);
