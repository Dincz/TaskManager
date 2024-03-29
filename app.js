const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(express.static("./public"));
const port = process.env.PORT;
// Routes
app.get("/hello", (req, res) => {
    res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
