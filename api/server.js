const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");
const potlucksRouter = require("../api/potlucks/potlucks-router");
const guestsRouter = require("../api/guests/guests-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/", authRouter)
server.use("/", usersRouter)
server.use("/", potlucksRouter)
server.use("/", guestsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ message: "API Running..." });
});

module.exports = server;