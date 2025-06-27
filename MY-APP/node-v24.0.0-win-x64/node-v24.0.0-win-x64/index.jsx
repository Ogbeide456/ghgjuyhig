const express= require('express');
const app = express();
const port= 5000;

app.get('/url/1', (req, res) => {
    res.status(200).send("You just fetched the notes");

});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// This code sets up a simple Express server that listens on port 5000 and responds with a message when the /api endpoint is accessed.
// To run this code, you need to have Node.js and Express installed.
// You can install Express by running `npm install express` in your terminal.
// After installing Express, save this code in a file named `index.js` and run it using the command `node index.js`.
// You can then access the server by navigating to http://localhost:5000/api in your web browser or using a tool like Postman.
// Make sure to have Node.js installed on your machine.
// This code is a basic setup for a Node.js server using Express.
// You can expand this server by adding more routes, middleware, or connecting to a database as needed.