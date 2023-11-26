/** @format */
const User = require("../model/userModel");
const getUser = async (id) => {
    const user = await User.findById(id);
    return user;
};

module.exports = getUser;
