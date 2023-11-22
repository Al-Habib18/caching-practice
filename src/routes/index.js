/** @format */

const router = require("express").Router();
const { createUser, getUsers } = require("../utils/index");

router.get("/users", async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const users = await getUsers({ page, limit });

        res.status(200).json({ users: users });
    } catch (err) {
        next(err);
    }
});

router.post("/users", async (req, res, next) => {
    try {
        const { name, email } = req.body;
        console.log(typeof name);
        const user = await createUser(name, email);

        res.status(201).json({ msg: "User created successfull", user: user });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
