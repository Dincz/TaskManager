const express = require('express');
const app = express();
// require("./").config();


const port = process.env.PORT  || 3000
 

//Routes
app.get('/hello', (req, res) =>{
    res.send('HelloWorld')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});