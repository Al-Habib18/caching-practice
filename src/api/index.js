/** @format */

const getAllUsersController = require("./controllers/getAllUser");
const getSingleUserController = require("./controllers/getSingleUser");
const createdUsersController = require("./controllers/createUser");

module.exports = {
    createdUsersController,
    getAllUsersController,
    getSingleUserController,
};
