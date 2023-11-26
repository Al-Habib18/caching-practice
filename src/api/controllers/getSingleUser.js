/** @format */
const getUser = require("../../utils/getSingle");
const getOrSetCache = require("../../utils/getOrSetCache");

const getSingleUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        // const user = await getUser(id);
        const key = `users:${id}`;
        const user = await getOrSetCache(() => {
            return getUser(id);
        }, key);

        res.status(200).json({ data: user });
    } catch (err) {
        next(err);
    }
};

module.exports = getSingleUser;
