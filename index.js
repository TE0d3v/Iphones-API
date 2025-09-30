const express = require('express')
const sequelize = require('./src/config/database');
const User = require('./src/models/User');
const Iphone = require('./src/models/Iphone')
const { createServer } = require("http");
const { Server, socket } = require("socket.io");

const app = express()
const port = 3000

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

io.on("connection", (socket) => {
  console.log("Um novo usuário de conectou");

  socket.on('get-all-iphones', async () => {
    try{
      const iphones = await Iphone.findAll();
      socket.emit('all-iphones', iphones);
    } catch (error){
      console.error("error fetching Iphones:", error);
      socket.emit('error', 'failed to fetch Iphones');
    }
  });

  socket.on('create-iphones', async (data) => {
    try {
      const newIphone = await Iphone.create(data);
      socket.emit('iphone-created', newIphone);
    } catch (error) {
      console.error("error creating iphones:", error);
      socket.emit('error', 'failed to create iphone');
    }
  });

  socket.on("disconnect", () => {
    console.log("user desconectado")
  })
})

sequelize
  .sync({ alter: true }) //cria/atualiza as tabelas no banco de dados
  .then(() => {
    httpServer.listen(port, () => console.log(`Database connected successfully and app listening on port ${port}`))
  })
  .catch((error) => {
    console.log(error.message)
  });