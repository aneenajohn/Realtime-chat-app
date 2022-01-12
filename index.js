const express = require('express');

const app = express();
const PORT = 4001;
const server = app.listen(PORT, ()=> {
    console.log(`App initiated on port ${PORT}`);
})


// Built-in middleware to serve static files
app.use(express.static('public'))