const express = require("express");
const v1UserRouter = require("./v1/routes/userRoutes");
const v1PasanakuRouter = require("./v1/routes/pasanakuRoutes");
const db = require("./database/db");
const cors = require("cors");

const {FRONTEND_URL, PORT} = require("./config.js");

const app = express();

app.use(cors({
    origin: FRONTEND_URL
}))
app.use(express.json());
app.use("/api/v1/users", v1UserRouter);
app.use("/api/v1/pasanakus", v1PasanakuRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});