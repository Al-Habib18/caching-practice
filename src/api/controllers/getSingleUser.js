/** @format */
const getUser = require("../../utils/getSingle");

const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUser(id);

        res.status(200).json({ data: user });
    } catch (err) {
        next(err);
    }
};

module.exports = getSingleUser;
