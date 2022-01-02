require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const apiRoutes = require('./src/routes');

// connection mongodb
mongoose.connect(process.env.DATABASE, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
    console.log('ERROR CONNECTION: ', error.message);
});

// create server express
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileUpload());
server.use(express.static(__dirname + '/public'));
server.use('/', apiRoutes);

// listen
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em - ${process.env.BASE}`);
});