// mongodb
require("./backend/config/db");

const app = require('express')();
const port = 3001;
const UserRouter = require('./backend/api/User')

// for accepting post form data 
const bodyParser = require('express').json
app.use(bodyParser());

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})