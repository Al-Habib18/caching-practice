/** @format */
require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes");
const { connectDB } = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use(userRouter);

// == Global error-handler == //
app.use((err, _req, res, next) => {
    const errObj = {
        message: err?.message || "Someting went wrong",
        status: err?.status || 500,
    };
    res.status(errObj.status).json(errObj);
});

app.listen(4040, async () => {
    await connectDB();
    console.log("http://localhost:4000");
});
