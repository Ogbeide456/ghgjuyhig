const express = require('express'); // importing express.js
const app = express(); //INSTANTIATING EXPRESS.JS APP SERVER INSTANCE
const port = 5000; // The server will be listening on port 5000

app.get ('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

