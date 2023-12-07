const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// eslint-disable-next-line no-unused-vars

const connectDB = (url) => mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

module.exports = connectDB;
