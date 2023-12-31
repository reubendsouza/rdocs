"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});
app.get("/", (req, res) => {
    res.send(`<h1>Hello world</h1>`);
});
io.on("connection", (socket) => {
    console.log(`a user connected: ${socket.id}`);
});
server.listen(3000, () => {
    console.log(`server running at 3000`);
});
