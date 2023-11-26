/** @format */
const getUsers = require("../../utils/getAllUser");
const getOrSetCache = require("../../utils/getOrSetCache");

const getAllUsers = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        // const users = await getUsers({ page, limit });

        const key = `users:page=${page}&limit=${limit}`;
        const users = await getOrSetCache(() => {
            return getUsers({ page, limit });
        }, key);

        res.status(200).json({ users: users });
    } catch (err) {
        next(err);
    }
};

module.exports = getAllUsers;
