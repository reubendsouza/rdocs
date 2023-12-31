import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Hello world</h1>`);
});

io.on("connection", (socket) => {
  console.log(`a user connected: ${socket.id}`);
});

server.listen(3000, () => {
  console.log(`server running at 3000`);
});
