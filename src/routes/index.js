/** @format */

const router = require("express").Router();
const {
    getAllUsersController,
    getSingleUserController,
    createdUsersController,
} = require("../api");

router.get("/users", getAllUsersController);
router.post("/users", createdUsersController);
router.get("/users/:id", getSingleUserController);

module.exports = router;
