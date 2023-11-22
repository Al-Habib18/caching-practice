/** @format */

const User = require("../model/userModel");

const getUsers = async ({ page = 1, limit = 2 }) => {
    const users = await User.find({})
        .skip(page * limit - limit)
        .limit(limit);
    return users;
};

const createUser = async (name, email) => {
    const user = new User({ name, email });
    await user.save();
    return user;
};

module.exports = { createUser, getUsers };
