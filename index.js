const express = require('express')
const sequelize = require('./src/config/database');
const User = require('./src/models/User');
const Iphone = require('./src/models/Iphone')
const iphoneRoutes = require('./src/router/iphone.routes');
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());
app.use(iphoneRoutes);

sequelize
  .sync({ alter: true }) //cria/atualiza as tabelas no banco de dados
  .then(() => {
    app.listen(port, () => console.log(`Database connected successfully and app listening on port ${port}`))
  })
  .catch((error) => {
    console.log(error.message)
  });