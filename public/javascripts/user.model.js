const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
     email: {
        type: String,
        require: true
     },
     number: {
        type: Number,
        require: false,
     }
    }, { versionKey: false, timestamps: true}
)


module.exports = model("User", UserSchema)

