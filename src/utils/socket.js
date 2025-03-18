const socket = require("socket.io");
const crypto = require("crypto");

const getSecertRoomId = (userId, targetUserId) => {
  return crypto
    .createHash("sha256")
    .update([userId, targetUserId].sort().join(":"))
    .digest("hex");
};
const initializeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    //handle events
    socket.on("joinChat", ({ firstName, userId, targetUserId }) => {
      const roomId = getSecertRoomId(userId, targetUserId);

      console.log(firstName + " joined the room " + roomId);
      socket.join(roomId);
    });

    socket.on("sendMessage", ({ firstName, userId, targetUserId, text }) => {
      const roomId = getSecertRoomId(userId, targetUserId);
      console.log(firstName + " " + text);
      io.to(roomId).emit("messageRecieved", { firstName, text });
    });

    socket.on("disconnect", () => {});
  });
};

module.exports = { initializeSocket };
