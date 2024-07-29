const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

const {jwtAuthMiddleware} = require('./jwt');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  // Import the router files for Perosn
  const userRoutes = require('./routes/userRoutes');
  const candidateRoutes = require('./routes/candidateRoutes');

  //Use the routers
  app.use('/user', userRoutes);
  app.use('/candidate', jwtAuthMiddleware, candidateRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3001');
})