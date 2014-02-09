(function () {
    var ObjectId, Reply, ReplySchema, Schema, mongoose;

    mongoose = require("mongoose");

    Schema = mongoose.Schema;

    ObjectId = Schema.Types.ObjectId;

    ReplySchema = new Schema({
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

    Reply = mongoose.model("Reply", ReplySchema);

    module.exports = Reply;

}).call(this);
