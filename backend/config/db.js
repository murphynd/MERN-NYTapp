const mongoose = require('mongoose');
const env = require("dotenv");
env.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("DB Connected");
})
.catch((err) => console.log(err))