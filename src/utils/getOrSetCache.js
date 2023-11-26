/** @format */

const redisClient = require("./redisClient");

const getOrSetCache = (cb, key) => {
    const pormise = new Promise((resolve, reject) => {
        const REDIS_EXPIRE_TIME = process.env.REDIS_EXPIRE_TIME || 3600;

        key = key || "users";
        redisClient.get(key, (err, data) => {
            if (err) {
                reject(err);
            }
            if (data) {
                console.log("cache hit :");
                return resolve(JSON.parse(data));
            }

            cb()
                .then((data) => {
                    redisClient.setex(
                        key,
                        REDIS_EXPIRE_TIME,
                        JSON.stringify(data)
                    );

                    resolve(data);
                    console.log("cache miss");
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });

    return pormise;
};

module.exports = getOrSetCache;
