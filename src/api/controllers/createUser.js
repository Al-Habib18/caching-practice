/** @format */
const createUser = require("../../utils/createUser");

const createUserController = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const user = await createUser(name, email);

        res.status(201).json({ msg: "User created successfull", user: user });
    } catch (err) {
        next(err);
    }
};

module.exports = createUserController;
