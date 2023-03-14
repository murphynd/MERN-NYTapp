// mongodb
require("./config/db");

const express = require('express');
const cors = require('cors');
const UserRouter = require('./api/User')
const port = 3001;

// for accepting post form data 
const bodyParser = require('express').json

const app = express();

app.use(bodyParser());

//app.use('/user', UserRouter)

app.use(cors())

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})