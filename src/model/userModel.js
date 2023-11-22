/** @format */
/** @format */

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
