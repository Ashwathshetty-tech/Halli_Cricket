const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var loginController = require('./controllers/LoginController.js');
var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
var eventRoutes = require('./routes/profile');
app.listen(3000, () => console.log('Server started at port : 3000'));



app.use('/login',loginController);
app.use('/events',eventRoutes);
app.use('/images', express.static(path.join('images')));

