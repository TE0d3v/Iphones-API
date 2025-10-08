const express = require('express')
const cors = require('cors')
const sequelize = require('./src/config/database');
const User = require('./src/models/User');
const Iphone = require('./src/models/Iphone')
const iphoneRoutes = require('./src/router/iphone.routes');
const emailRoutes = require('./src/router/email.routes');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(cors());
app.use(express.json());
app.use(iphoneRoutes);
app.use(emailRoutes);

sequelize
  .sync({ alter: true }) //cria/atualiza as tabelas no banco de dados
  .then(() => {
    app.listen(port, () => console.log(`Database connected successfully and app listening on port ${port}`))
  })
  .catch((error) => {
    console.log(error.message)
  });