/** @format */
const createUser = require("../../utils/createUser");
const deleteCache = require("../../utils/deleteCache");

const createUserController = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const user = await createUser(name, email);

        res.status(201).json({ msg: "User created successfull", user: user });

        // cache delete
        // const key = `users:${user.id}`;
        deleteCache({ pattern: "users:*" });
    } catch (err) {
        next(err);
    }
};

module.exports = createUserController;
