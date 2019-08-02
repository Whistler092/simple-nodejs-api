const mongoose = require("mongoose");

require("dotenv").config();
const URI = `mongodb+srv://oliver:${process.env.MONGOPASS}@cluster0-mcgqp.mongodb.net/test?retryWrites=true&w=majority`;

const options = {
    autoIndex: false,
    reconnectTries: 30,
    reconnectInterval: 500,
    poolSize: 10    
}

mongoose.connect(URI, options)
        .then(db => console.log("Db is connected"))
        .catch(error => console.error("error" , error))