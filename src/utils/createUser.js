/** @format */
const User = require("../model/userModel");

const createUser = async (name, email) => {
    const user = new User({ name, email });
    await user.save();
    return user;
};

module.exports = createUser;
