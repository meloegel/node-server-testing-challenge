const express = require('express')

const FriendsRouter = require('./friends/friends-router')

const server = express()

server.use(express.json())

server.use('/friends', FriendsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server