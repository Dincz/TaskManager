const mongoose = require("mongoose");

// eslint-disable-next-line no-unused-vars
// const connectionString = "mongodb+srv://dineshndr02:dineshndr02@dineshcluster.lwmgt84.mongodb.net/Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

module.exports = connectDB;
