const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();

app.use(express.json());
const port = process.env.PORT;
// middleware

// Routes
app.get("/hello", (req, res) => {
    res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
