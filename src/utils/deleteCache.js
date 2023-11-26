/** @format */

const redisClient = require("./redisClient");

const deletePatternKey = (pattern) => {
    redisClient
        .scanStream({
            match: pattern,
            count: 1000,
        })
        .on("data", (keys) => {
            if (keys.length > 0) {
                redisClient.del(...keys);
            }
        })
        .on("end", () => {
            console.log("delete pattern key successfully");
        });
};

const deleteCache = ({ keys, pattern }) => {
    try {
        if (pattern) {
            deletePatternKey(pattern);
        }

        if (keys?.pattern) {
            redisClient.delete(...keys);
        }
    } catch (e) {
        throw new Error(err);
    }
};

module.exports = deleteCache;
