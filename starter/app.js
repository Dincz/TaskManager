const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
 require("dotenv").config();

 app.use(express.json());
const port = process.env.PORT  
 //middleware

//Routes
app.get('/hello', (req, res) =>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});